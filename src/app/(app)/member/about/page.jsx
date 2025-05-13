import React from "react";
import Image from "next/image";
import Col, { LeftCont, RightCont } from "@/components/layout/col-layout";
import Contents from "@/components/layout/contents";

export default function AboutPage() {
  return (
    <Contents
      title="회원이란?"
      backgroundImage="/images/member/banner_about.jpg"
    >
      <section className="rounded-[20px] overflow-hidden bg-white">
        <Image
          src="/images/member/mamber_about.jpg"
          alt="대한요가회"
          width={1140}
          height={782}
        />
        <div className="flex gap-[24px] border-t-2 border-[#000] mt-[60px]">
          <strong className="block w-[558px] flex-shrink-0 mt-[30px] text-[32px] font-bold items-center leading-[40px]">
            대한요가회 회원이란?
          </strong>
          <ul className="text-[16px] line-height-[24px] ">
            <li className="pt-[30px] pb-[30px]">
              <strong className="block text-[20px] font-bold line-height-[24px]">
                인증교육기관
              </strong>
              <ul className="mt-[10px] bullet-list">
                <li>
                  국내 유일의 문화체육관광부 산하 대한체육회의 준회원 단체,
                  대한요가회가 인증한 요가교육기관
                </li>
                <li>공신력 있는 요가 프로그램을 통해 지도사 양성</li>
              </ul>
            </li>
            <li className="border-t border-[#eee] pt-[30px] pb-[30px]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                공식인증센터
              </strong>
              <p className="mt-[10px] leading-[24px]">
                생활체육에서 요가의 저변을 확대하기 위해 대한요가회에서 인증하는
                요가원·요가센터
              </p>
            </li>
            <li className="border-t border-[#eee] pt-[30px] pb-[30px]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                강사
              </strong>
              <p className="mt-[10px] leading-[24px]">
                대한요가회에서 주관하는 공인 자격증을 취득한 요가/필라테스
                지도사{" "}
              </p>
            </li>
            <li className="border-t border-[#eee] pt-[30px] pb-[30px]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                수련자
              </strong>
              <p className="mt-[10px] leading-[24px]">
                대한요가회에서 명명하는 요가/필라테스를 수행하는 사람
              </p>
            </li>
            <li className="border-t border-[#eee] pt-[30px] pb-[30px]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                심판
              </strong>
              <p className="mt-[10px] leading-[24px]">
                대한요가회에서 주관하는 공인 자격증을 취득한 요가/필라테스
                대회를 심사 및 판정 하는 사람
              </p>
            </li>
            <li className="border-t border-b border-[#eee] pt-[30px] pb-[30px]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                선수
              </strong>
              <p className="mt-[10px] leading-[24px]">
                대한요가회에서 인증한 대회에 출전 자격을 갖춘 수련자
              </p>
            </li>
          </ul>
        </div>
      </section>
    </Contents>
  );
}
