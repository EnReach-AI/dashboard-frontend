import { pxToRem } from "@/lib/utils";
import { SVGS } from "@/svg";
import { Card, cn } from "@nextui-org/react";
import _ from "lodash";
import React, { PropsWithChildren, ReactNode } from "react";

export function IconCard({ icon, className, iconSize = 30, tit, content }: { icon: React.FC; className?: string; iconSize?: number; tit: ReactNode; content: ReactNode }) {
  const Micon = icon;
  const sizeRem = pxToRem(iconSize);
  const leftSizeRem = pxToRem(120 - iconSize);
  const pl = pxToRem((30 - iconSize) / 2);
  return (
    <Card className={cn("bg-gray-1 bg-no-repeat flex flex-col p-[1.75rem] gap-[2.8125rem] relative", className)}>
      <SVGS.SvgBgIconCard className="absolute left-0 top-0 text-[6.25rem] z-0" />
      <div className="flex items-center whitespace-nowrap" style={{ height: sizeRem }}>
        <div
          className="shrink-0"
          style={{
            height: sizeRem,
            width: leftSizeRem,
            fontSize: sizeRem,
            paddingLeft: pl,
          }}
        >
          <Micon />
        </div>
        {tit}
      </div>
      <div className="w-full flex flex-row">
        <div style={{ width: leftSizeRem, flexShrink: 100 }} />
        <div style={{ flexBasis: `calc(100% - ${leftSizeRem})`, flexGrow: 1 }} className="">
          {content}
        </div>
      </div>
    </Card>
  );
}

export function InnerIconCard({ icon, className, iconSize = 30, children }: PropsWithChildren & { icon: React.FC; className?: string; iconSize?: number }) {
  const Micon = icon;
  const sizeRem = pxToRem(iconSize);
  const leftSizeRem = pxToRem(120 - iconSize);
  const pl = pxToRem((30 - iconSize) / 2);
  return (
    <Card className={cn("bg-[#F5F5F514] bg-no-repeat flex flex-row p-[1.875rem] relative", className)}>
      <SVGS.SvgBgIconCard className="absolute left-0 top-0 text-[6.6rem] z-0" />
      <div
        className="shrink-0"
        style={{
          height: sizeRem,
          width: leftSizeRem,
          fontSize: sizeRem,
          paddingLeft: pl,
          paddingTop: pl,
        }}
      >
        <Micon />
      </div>
      {children}
    </Card>
  );
}

export function TitCard(p: PropsWithChildren & { tit?: string; right?: ReactNode; className?: string }) {
  return (
    <Card className={cn("bg-gray-1 bg-no-repeat flex p-6 gap-6", p.className)}>
      {p.tit && (
        <div className="flex items-center justify-between">
          <span className="text-base font-bold">{p.tit}</span>
          {p.right}
        </div>
      )}
      {p.children}
    </Card>
  );
}

export function BgCard(p: PropsWithChildren & { className?: string }) {
  return <div className="relative overflow-visible flip_item">
    <div style={{ backgroundSize: '100% 100%' }} className="bg-s1 bg-no-repeat animate-pulse w-[calc(100%_+_2.5rem)] h-[calc(100%_+_2.5rem)] absolute -left-5 -top-5 z-0" />
    <Card className={cn("bg-[#2E2E2E] border border-[#007AFF] flex flex-col justify-start items-center p-6 gap-6 w-full h-full", p.className)}>{p.children}</Card>
  </div>
}
