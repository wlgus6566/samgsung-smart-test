import React from "react";
import Contents from "@/components/layout/contents";
import Image from "next/image";
export default function SponsorsPage() {
  return (
    <Contents title="후원사" backgroundImage="/images/kya/kya_kv_bg.jpg">
      <h2 className="text-base font-bold">후원사</h2>
      <div className="mt-[10px] rounded-md overflow-hidden ">
        <Image
          src="/images/kya/sponsors/logo-xexymix.jpg"
          alt="젝시믹스"
          width={1140}
          height={400}
          className="w-full h-auto object-contain"
        />
      </div>

      <h2 className="mt-[60px] text-base font-bold">MOU</h2>
      <ul className="mt-[10px] flex flex-wrap gap-[12px]">
        <li className="basis-[calc(50%-6px)] h-[202px] border-1 border-[#eeeeee] overflow-hidden rounded-xl flex items-center justify-center">
          <Image
            src="/images/kya/sponsors/logo-wonkwang.png"
            alt="원광디지털대학교"
            width={354}
            height={74}
            className="h-auto"
          />
        </li>
        <li className="basis-[calc(50%-6px)] h-[202px] border-1 border-[#eeeeee] overflow-hidden rounded-xl flex items-center justify-center">
          <Image
            src="/images/kya/sponsors/logo-buddhism.png"
            alt="불교대학원"
            width={324}
            height={113}
            className="h-auto"
          />
        </li>
        <li className="basis-[calc(50%-6px)] h-[202px] border-1 border-[#eeeeee] overflow-hidden rounded-xl flex items-center justify-center">
          <Image
            src="/images/kya/sponsors/logo-choonhae.png"
            alt="춘해보건대학교"
            width={340}
            height={104}
            className="h-auto"
          />
        </li>
        <li className="basis-[calc(50%-6px)] shrink-0 h-[202px] border-1 border-[#eeeeee] overflow-hidden rounded-xl flex items-center justify-center">
          <Image
            src="/images/kya/sponsors/logo-busan-univers.png"
            alt="부산대학교"
            width={370}
            height={122}
            className="h-auto"
          />
        </li>
      </ul>

      <h2 className="mt-[60px] text-base font-bold">협력사</h2>
      <ul className="mt-[10px] flex flex-wrap gap-[12px]">
        <li className="basis-[calc(50%-6px)] h-[202px] border-1 border-[#eeeeee] overflow-hidden rounded-xl flex items-center justify-center">
          <Image
            src="/images/kya/sponsors/jumpup-logo.png"
            alt="부산대학교"
            width={451}
            height={254}
            className="h-auto"
          />
        </li>
      </ul>
    </Contents>
  );
}
