import React from "react";
import Image from "next/image";
import Col, { LeftCont, RightCont } from "@/components/layout/col-layout";
import Contents from "@/components/layout/contents";

export default function JudgesPage() {
  return (
    <Contents title="심판" backgroundImage="/images/member/banner_about.jpg">
      <section className="overflow-hidden bg-white">
        <div>
          <strong className="block text-[32px] font-bold leading-[46px]">
            대한요가회에서 주관하는 공인 자격증을 취득한<br />
            요가/필라테스 대회를 심사 및 판정하는 사람
          </strong>
        </div>
        <div className="mt-[40px]">
          <Image src="/images/member/judges.jpg" alt='심판' width={1140} height={450}/>
        </div>
      </section>
      
    </Contents>
  );
}
