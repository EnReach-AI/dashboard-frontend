import { NodeItem } from "@/types/node";
import { TrendingReward } from "@/types/trending";
import { LoginResult, SingUpResult, User, UserReward } from "@/types/user";
import axios from "axios";
import { ENV } from "./env";
import _ from "lodash";
import { fmtBoost } from "@/components/fmtData";

const API_MAP: { [k in typeof ENV]: string } = {
  beta: "https://dev-api.enreach.network/api",
  staging: "https://staging-api-1.enreach.network/api",
  prod: "https://api.enreach.network/api",
};

export const BASE_API = API_MAP[ENV];

const Api = axios.create({
  baseURL: BASE_API,
  headers: {
    "Content-Type": "application/json",
  },
});

export type RES<T> = {
  data: T;
};

const backendApi = {
  setAuth: (auth?: string) => {
    if (auth) {
      Api.defaults.headers.common["Authorization"] = auth.startsWith("Bearer") ? auth : `Bearer ${auth}`;
    } else {
      delete Api.defaults.headers.common["Authorization"];
    }
  },
  loginApi: async (data: { email: string; password: string }) => {
    const response = await Api.post<RES<LoginResult>>("/user/signIn", data);
    backendApi.setAuth(response.data.data.token);
    return response.data.data;
  },
  loginByGoogleApi: async (data: { accessToken: string }) => {
    const response = await Api.post<RES<LoginResult>>("/user/google/signIn", data);
    backendApi.setAuth(response.data.data.token);
    return response.data.data;
  },
  loginSetReferralApi: async (data: { accessToken: string; referralCode?: string }) => {
    const response = await Api.post<RES<LoginResult>>("/user/referral/by", data);
    backendApi.setAuth(response.data.data.token);
    return response.data.data;
  },
  registerApi: async (data: { email: string; password: string; referralCode?: string }) => {
    const response = await Api.post<RES<SingUpResult>>("/user/signUp", { ...data });
    return response.data.data;
  },

  registerByGoogleApi: async (accessToken: string) => {
    const response = await Api.post<RES<SingUpResult>>("/user/google/signUp", { accessToken });
    return response.data.data;
  },

  resendRegisterVerifyCode: async (uid: string) => {
    await Api.post<RES<undefined>>(`/user/verify/${uid}/resend`);
    return true;
  },
  verifyRegisterCode: async (uid: string, code: string) => {
    const response = await Api.post<RES<LoginResult>>(`/user/verify/${uid}/${code}`);
    return response.data.data;
  },
  userInfo: async () => {
    const response = await Api.get<RES<User>>("/user/profile");
    const p = response.data.data.point;
    _.keys(p).forEach((key) => {
      p[key] = _.toNumber(p[key]);
    });
    p.total = _.toNumber(fmtBoost(response.data.data.stat.extraBoost)) * p.total;
    return response.data.data;
  },
  sendResetPassword: async (email: string) => {
    await Api.post<RES<undefined>>("/user/password/reset/send", { email });
    return true;
  },
  resetPassword: async (data: { email: string; password: string; verifyCode: string }) => {
    await Api.post<RES<undefined>>("/user/password/reset", data);
    return true;
  },
  userUpdate: async (data: { username?: string; disconnect?: { x?: boolean; tg?: boolean; discord?: boolean } }) => {
    await Api.post<RES<undefined>>("/user/profile/update", data);
    return true;
  },

  userReward: async () => {
    const response = await Api.get<RES<UserReward>>("/user/reward");
    return response.data.data;
  },

  nodeList: async () => {
    const response = await Api.get<RES<NodeItem[]>>("/node/list");
    return response.data.data;
  },

  trendingRewards: async (type: "week" | "month" = "month") => {
    const response = await Api.get<RES<TrendingReward[]>>("/trending/rewards", { params: { type } });
    return response.data.data;
  },

  getAccessToken: async () => {
    const response = await Api.get<RES<{ accessToken: string }>>("/user/accessToken");
    return response.data.data.accessToken;
  },

  getIP: async () => {
    const ip = await axios.get<{
      ipString: string;
      ipType: string;
    }>("https://api.bigdatacloud.net/data/client-ip");
    return ip.data;
  },

  updateNodeName: async (node: NodeItem, name: string) => {
    // /api/node/rename/{clientId}/{name}
    await Api.post<RES<undefined>>(`/node/rename/${node.connectionId}/${encodeURIComponent(node.ipAddress)}/${encodeURIComponent(name)}`);
    return true;
  },
};

export default backendApi;
