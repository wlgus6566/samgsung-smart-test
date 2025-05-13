"use client";

import React from "react";
import Img from "@/components/ui/img";
import Contents from "@/components/layout/contents";
import Col, { LeftCont, RightCont } from "@/components/layout/col-layout";

export default function GreetingPage() {
  return (
    <Contents title="회장 인사말" backgroundImage="/images/kya/kya_kv_bg.jpg">
      {/* 회장 이미지 영역 */}
      <section className="rounded-[20px] overflow-hidden bg-white">
        <Img
          src="/images/kya/greeting_top_bg.jpg"
          alt="강승진 회장"
          width={1140}
          height={300}
        />
      </section>
      <Col className="mt-[60px]">
        <LeftCont>
          <h2 className="heading-2">
            요가 문화를 선도하며
            <br />
            조화롭고 건강한 사회를 위해
            <br />
            노력하겠습니다.
          </h2>
        </LeftCont>
        <RightCont>
          <p>대한요가회를 찾아주신 여러분, 반갑습니다.</p>

          <p className="mt-[24px]">
            대한요가회는 요가를 통해 몸과 마음의 균형을 찾고, 더 건강한 삶을
            만들어가는 길을 함께 걸어가고 있습니다. 요가는 단순한 운동이 아니라,
            삶의 태도이자 철학입니다. 이를 통해 우리는 내면의 평온을 찾고,
            주변과 조화를 이루며 살아가는 지혜를 배울 수 있습니다.
            <br />
            <br />
            우리회는 요가의 가치를 널리 알리고, 보다 많은 사람들이 요가를 통해
            건강하고 행복한 삶을 누릴 수 있도록 노력하고 있습니다. 정통 요가의
            정신을 바탕으로 현대인의 라이프스타일에 맞는 프로그램을 개발하고,
            전문가 양성을 위한 체계적인 교육 시스템을 구축하며, 국내외 요가
            커뮤니티와의 교류를 확대해 나가고 있습니다.
            <br />
            <br />
            앞으로도 대한요가회는 요가 문화를 선도하며, 건강하고 조화로운 사회를
            만들어가는 데 기여할 것을 약속드립니다. 함께 성장하고 발전할 수
            있도록 많은 관심과 성원 부탁드립니다.
            <br />
            <br />
            감사합니다.
          </p>
          {/* 서명 영역 */}
          <div className="flex justify-end">
            <div className="flex items-end">
              <p className="body-1 font-bold leading-[22.4px]">
                대한요가회 회장 강승진
              </p>
              <Img
                src="/images/kya/sign.png"
                alt="강승진 회장 서명"
                width={160}
                height={140}
              />
            </div>
          </div>
        </RightCont>
      </Col>
    </Contents>
  );
}
