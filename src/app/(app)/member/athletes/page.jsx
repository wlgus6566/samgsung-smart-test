import React from "react";
import Image from "next/image";
import Col, { LeftCont, RightCont } from "@/components/layout/col-layout";
import Contents from "@/components/layout/contents";
import Link from "next/link";
export default function AthletesPage() {
  return (
    <Contents title="선수" backgroundImage="/images/member/banner_about.jpg">
      <section className="overflow-hidden bg-white">
        <div>
          <strong className="block text-[32px] font-bold leading-[46px]">
            대한요가회에서 인증한 대회에 출전 자격을 갖춘
            <br />
            수련자
          </strong>
        </div>
        <div className="mt-[20px]">
          <Image
            src="/images/member/athlete01.jpg"
            alt="수련자"
            width={1140}
            height={339}
          />
        </div>
        <div className="mt-[40px]">
          <Image
            src="/images/member/athlete02.jpg"
            alt="선수등록하기"
            width={1140}
            height={460}
          />
        </div>
        <div className="flex justify-center mt-[60px]">
          <a
            href="https://g1.sports.or.kr/index.do"
            target="_blank"
            className="btn-more-link primary w-[165px]"
          >
            선수 등록하기
          </a>
        </div>
      </section>
    </Contents>
  );
}
