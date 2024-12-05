import { validateEmail, validatePassword, validateReferralCode, validateVerifyCode } from "@/lib/validates";
import { Input, InputSlots, SlotsToClasses } from "@nextui-org/react";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";
import { useToggle } from "react-use";
import VerificationInput from "react-verification-input";

const inputClassNames: SlotsToClasses<InputSlots> = {
  inputWrapper: "h-[42px] rounded-lg bg-l1 border-none backdrop-blur-lg shadow-1 text-xs",
  label: "text-xs",
  input: "text-xs !text-white",
};

export function InputPassword({
  setPassword,
  label,
  error,
  validate = validatePassword,
}: {
  setPassword: (pass: string) => void;
  label?: string;
  error?: string;
  validate?: (value: string) => string | true | null | undefined;
}) {
  const [showPassword, toggleShowPassword] = useToggle(false);
  return (
    <Input
      isRequired
      classNames={inputClassNames}
      type={showPassword ? "text" : "password"}
      // label={label || "Password"}
      placeholder={label || "Password"}
      labelPlacement="inside"
      variant="bordered"
      validate={validate}
      endContent={
        <button className="focus:outline-none h-full" type="button" onClick={() => toggleShowPassword()} aria-label="toggle password visibility">
          {showPassword ? <RiEyeLine className="text-xs text-default-400 pointer-events-none" /> : <RiEyeCloseLine className="text-xs text-default-400 pointer-events-none" />}
        </button>
      }
      errorMessage={error}
      onChange={(e) => setPassword(e.target.value)}
    />
  );
}

export function InputEmail({ setEmail, value }: { setEmail: (email: string) => void; value?: string }) {
  return (
    <Input
      value={value}
      classNames={inputClassNames}
      type="email"
      // label="Email"
      placeholder="Email"
      labelPlacement="inside"
      variant="bordered"
      isRequired
      validate={validateEmail}
      onChange={(e) => setEmail(e.target.value)}
    />
  );
}

export function InputReferralCode({ setReferalCode, value }: { setReferalCode: (code: string) => void; value?: string }) {
  return (
    <Input
      value={value}
      classNames={inputClassNames}
      type="text"
      // label="Referral code"
      placeholder="Referral code (optional)"
      labelPlacement="inside"
      variant="bordered"
      isRequired
      validate={validateReferralCode}
      onChange={(e) => setReferalCode(e.target.value)}
    />
  );
}
export function InputVerifyCode({ setVerifyCode }: { setVerifyCode: (code: string) => void }) {
  return (
    <Input
      classNames={inputClassNames}
      type="text"
      // label="Verification Code"
      placeholder="Verification Code"
      labelPlacement="inside"
      variant="bordered"
      isRequired
      validate={validateVerifyCode}
      onChange={(e) => setVerifyCode(e.target.value)}
    />
  );
}

export function InputSplitCode({ onComplete, onChange }: { onComplete?: (value: string) => void; onChange?: (value: string) => void }) {
  return (
    <VerificationInput
      placeholder=""
      onChange={onChange}
      onComplete={onComplete}
      classNames={{
        container: "w-full justify-between h-[42px] ",
        character: "rounded-lg max-w-[42px]  w-[42px] bg-l1 bg-transparent backdrop-blur-lg shadow-1 text-white text-xl leading-[42px] uppercase",
      }}
    />
  );
}


// export function InputName(){

// }