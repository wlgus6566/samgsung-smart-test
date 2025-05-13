"use client";

import Image from "next/image";
import Contents from "@/components/layout/contents";
import InstructorList from "./instructor-list";
import { useDialogStore } from "@/store/dialog";
import QualificationInfoDialogs from "@/components/dialog/qualification-info";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
export default function InstructorsPage() {
  const { dialogOpen } = useDialogStore();

  return (
    <Suspense fallback={<DetailLoading />}>
      <Contents title="강사" backgroundImage="/images/member/banner_about.jpg">
        {/* 협회 단체 사진 영역 */}
        <section className="overflow-hidden bg-white">
          <div className="flex justify-between">
            <div>
              <strong className="block text-[20px] font-bold leading-[25px] text-primary">
                certification
              </strong>
              <strong className="block mt-[10px] text-[32px] font-bold leading-[46px]">
                생활체육 요가지도사
                <br />
                자격증이란?
              </strong>
              <p className="mt-[20px] text-[16px] leading-[24px]">
                문화체육관광부 산하 대한체육회 준회원단체인 대한요가회에서
                <br />
                공식 인증하는 자격증으로, 요가의 기본 원리와 지도 방법을
                <br />
                체계적으로 교육받았음을 증명합니다.
              </p>
            </div>
            <div>
              <Image
                src="/images/member/instructors.jpg"
                alt="자격증이란"
                width={558}
                height={463}
              />
            </div>
          </div>

          <div className="flex gap-[24px] border-t-2 border-[#000] mt-[60px]">
            <strong className="block w-[558px] flex-shrink-0 mt-[30px] text-[32px] font-bold items-center leading-[46px]">
              대한요가회 공식 인증을 받은
              <br />
              요가지도사 자격증입니다.
            </strong>
            <div>
              <ul className="text-[16px] line-height-[24px]">
                <li className="pt-[30px] pb-[30px]">
                  <strong className="block text-[20px] font-bold line-height-[24px]">
                    자격증 등급
                  </strong>
                  <p className="mt-[10px] leading-[24px]">
                    요가지도사의 역량과 전문성에 따라 1급 자격증과 2급
                    자격증으로 구분됩니다.
                    <br />
                    2급은 기본적인 요가 지도 능력을 갖춘 경우 취득할 수 있으며,
                    1급 자격증은 심화된
                    <br />
                    교육과정을 이수하고, 높은 수준의 지도 능력을 인증받은 경우
                    취득할 수 있습니다.
                  </p>
                  <div className="flex mt-[20px] gap-[20px] flex-wrap">
                    <Button
                      className="btn-more-link flex-grow-1 bg-white border-black text-black hover:bg-white hover:text-black"
                      onClick={() => {
                        dialogOpen("qualification-info-1");
                      }}
                    >
                      1급 자격 목록 확인하기
                    </Button>
                    <Button
                      className="btn-more-link flex-grow-1 bg-white border-black text-black hover:bg-white hover:text-black"
                      onClick={() => {
                        dialogOpen("qualification-info-2");
                      }}
                    >
                      2급 자격 목록 확인하기
                    </Button>
                  </div>
                </li>
                <li className="border-t border-[#eee] pt-[30px] pb-[30px]">
                  <strong className="block text-[20px] font-bold line-height-[24px]">
                    자격증 취득 요건
                  </strong>
                  <p className="mt-[10px] leading-[24px]">
                    대한요가회에서 인증한 여러 교육기관을 통해 생활체육
                    요가지도사 과정을
                    <br />
                    정상적으로 이수한 사람에 한하여 자격증이 발급됩니다.
                  </p>
                </li>
                <li className="border-t border-b border-[#eee] pt-[30px] pb-[30px]">
                  <strong className="block text-[20px] font-bold line-height-[24px]">
                    자격증 취득 혜택
                  </strong>
                  <p className="mt-[10px] leading-[24px]">
                    유관 정부 기관 및 공공기관에서 시행하는 요가 관련
                    교육사업에서 우선적으로
                    <br />
                    선발되는 혜택이 제공됩니다. 이를 통해 공신력 있는 기관에서
                    요가 지도자로 활동할
                    <br />
                    기회를 더욱 넓힐 수 있습니다.
                  </p>
                </li>
              </ul>
              <p className="block mt-[10px] text-[14px] line-height-[18px] text-[#999]">
                * 자세한 사항은 해당 기관의 홈페이지(공지사항) 또는 문의처를
                통해 확인하시기 바랍니다.
              </p>
            </div>
          </div>

          <strong className="block mt-[160px] text-[32px] font-bold leading-[40px]">
            생활체육요가지도사 자격증
          </strong>
          <InstructorList />
        </section>

        {/* 다이얼로그 컴포넌트 */}
        <QualificationInfoDialogs />
      </Contents>
    </Suspense>
  );
}
