import React, { Suspense } from "react";
import Image from "next/image";
import Contents from "@/components/layout/contents";
import DetailLoading from "@/components/post/detail-loading";
import BranchList from "@/app/(app)/member/branch-list/branch-list";
import fetcher from "@/lib/fetcher";

export default async function EducationPage({ searchParams }) {
  const areaCd = (await searchParams)?.areaCd || "ALL";
  const searchSelect = (await searchParams)?.searchSelect || "SPOT_NAME";
  const searchWord = (await searchParams)?.searchWord || "";
  const currentPage = parseInt((await searchParams)?.currentPage || "1", 10);
  const url = "/api/v1/certeduorg";

  const initialData = await fetcher(
    `${url}?areaCd=${areaCd === "ALL" ? "" : areaCd}&searchSelect=${searchSelect}&searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=10`
  );

  return (
    <Contents
      title="인증교육기간"
      backgroundImage="/images/member/banner_about.jpg"
    >
      {/* 협회 단체 사진 영역 */}
      <section className="overflow-hidden bg-white">
        <div>
          <strong className="block text-[20px] font-bold leading-[25px] text-primary">
            인증교육기관
          </strong>
          <strong className="block mt-[10px] text-[32px] font-bold leading-[46px]">
            '대한요가회 인증교육기관'은 국내 유일의 문화체육관광부 산하
            <br />
            대한체육회의 준회원단체로서 대한요가회가 인증한 교육기관입니다.
          </strong>
        </div>
        <div className="flex justify-center mt-[140px]">
          <Image
            src="/images/member/education.jpg"
            alt="인증교육이관"
            width={1060}
            height={320}
          />
        </div>
        <div className="flex gap-[24px] border-t-2 border-[#000] mt-[60px]">
          <strong className="block w-[558px] flex-shrink-0 mt-[30px] text-[32px] font-bold items-center leading-[46px]">
            요가 교육과 전문적인 과정을 <br />
            제공하는 인증 교육기관입니다.
          </strong>
          <div>
            <ul className="text-[16px]  line-height-[24px] ">
              <li className="pt-[30px] pb-[30px]">
                <strong className="block text-[20px] font-bold leading-[25px]">
                  대한요가회의 목적
                </strong>
                <p className="mt-[10px] leading-[24px]">
                  대한요가회는 요가를 국민에게 널리 보급하여 국민 체력을
                  향상하게 하며, <br />
                  건전한 여가선용과 명랑한 기풍을 진작하는 한편, 운동선수 및 그
                  단체를 지원·육성하고
                  <br />
                  우수한 선수를 양성하여 국위 선양에 이바지함을 목적으로 합니다.
                </p>
              </li>
              <li className="border-t border-[#eee] pt-[30px] pb-[30px]">
                <strong className="block text-[20px] font-bold leading-[25px]">
                  대한요가회의 사업 수행
                </strong>
                <p className="mt-[10px] leading-[24px]">
                  대한요가회는 위의 목적을 달성하기 위하여 본 회 규정 제4조 1항
                  11호 (요가단체의 <br />
                  사업수행에 필요한 재원조달을 위한 수익사업)의 사업과 활동을
                  수행합니다.
                </p>
              </li>
              <li className="border-t border-b border-[#eee] pt-[30px] pb-[30px]">
                <strong className="block text-[20px] font-bold leading-[25px]">
                  생활체육 요가지도사 자격증 발급
                </strong>
                <p className="mt-[10px] leading-[24px]">
                  위 사업과 활동을 수행하기 위해 대한요가회는 생활체육
                  요가지도사 자격증을 <br />
                  발급하며, 이를 통해 공신력 있는 요가지도사를 양성하고 요가
                  교육의 질적 향상을 <br />
                  도모합니다.
                </p>
              </li>
            </ul>
            <p className="block mt-[10px] text-[14px]  line-height-[18px] text-[#999]">
              * 자세한 사항은 해당 기관의 홈페이지(공지사항) 또는 문의처를 통해
              확인하시기 바랍니다.
            </p>
          </div>
        </div>
        <Suspense fallback={<DetailLoading />}>
          <BranchList
            initialData={initialData}
            url={url}
            title={"지역별 인증교육기간"}
          />
        </Suspense>
      </section>
    </Contents>
  );
}
