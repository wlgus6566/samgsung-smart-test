import BranchList from "@/app/(app)/member/branch-list/branch-list";
import fetcher from "@/lib/fetcher";
import { Suspense } from "react";
import DetailLoading from "@/components/post/detail-loading";
import Image from "next/image";
import Link from "next/link";
export const revalidate = 60;
import Contents from "@/components/layout/contents";

export default async function CentersPage({ searchParams }) {
  const areaCd = (await searchParams)?.areaCd || "ALL";
  const searchSelect = (await searchParams)?.searchSelect || "SPOT_NAME";
  const searchWord = (await searchParams)?.searchWord || "";
  const currentPage = parseInt((await searchParams)?.currentPage || "1", 10);
  const url= '/api/v1/center';

  const initialData = await fetcher(
    `${url}?areaCd=${areaCd === "ALL" ? "" : areaCd}&searchSelect=${searchSelect}&searchWord=${encodeURIComponent(searchWord)}&currentPage=${currentPage}&size=10`
  );

  return (
    <Contents
      title="공식인증센터"
      backgroundImage="/images/member/banner_about.jpg"
    >
      <section className="overflow-hidden bg-white">
        <div>
          <strong className="block text-[20px] font-bold leading-[25px] text-primary">
            공식인증센터
          </strong>
          <strong className="block mt-[10px] text-[32px] font-bold leading-[46px]">
            생활체육에서 요가, 필라테스의 저변을 확대
            <br />
            하기 위해 대한요가회에서 인증하는 요가원·
            <br />
            요가센터·필라테스센터를 말합니다.
          </strong>
          <p className="mt-[7px] text-[16px] leading-[25px]">
            공식인증을 통해 공신력 있는 교육과 혜택으로 지속 가능한 센터로
            발전할 수 있습니다.
          </p>
        </div>
        <div>
          <strong className="block mt-[60px] text-[32px] font-bold leading-[46px]">
            선정 기준
          </strong>
          <ul className="grid grid-cols-[6fr_4fr] gap-x-[24px] mt-[10px] border-t-[2px] border-[#000]">
            <li className="w-[558px] pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                면적 구분
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                10 평 (33.06 m2) 미만 퍼스널센터/10 평 (33.06 m2) 이상
                퍼블릭센터
              </p>
            </li>
            <li className="pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                강의실 개수
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                최소 1 개 이상
              </p>
            </li>
            <li className="pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                운영 시간
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                주 5 일 이상 하루 최소 3 시간 운영
              </p>
            </li>
            <li className="pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                강사진
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                최소 1 인 이상의 대한요가회 인증 강사 상주 (센터장 포함)
              </p>
            </li>
            <li className="pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                프로그램
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                대한요가회 표준 수련 과정을 기반으로 한 프로그램
              </p>
            </li>
            <li className="pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                거리 규정
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                센터 간 20m 이내, 동일 건물 불가
              </p>
            </li>
            <li className="col-start-2 row-start-1 row-span-1 w-[558px] pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                위생 및 안전
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                회원을 위한 위생 관리 기준 준수
              </p>
            </li>
            <li className="col-start-2 row-start-2 row-span-3 pt-[30px] pb-[30px] border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                혜택
              </strong>
              <ul className="mt-[10px] bullet-list">
                <li className="!leading-[30px] before:!top-[11px]">
                  60만원 상당의 웰컴 키트 및 혜택 제공
                </li>
                <li >
                  대한요가회 후원사 및 협력사 할인 혜택 제공
                </li>
                <li className="!leading-[30px] before:!top-[11px]">
                  대한요가회 공식 인증패(현판) 및 인증서 제공
                </li>
                <li className="!leading-[30px] before:!top-[11px]">
                  대한요가회 회원 급수제 운영 자격 제공
                </li>
                <li className="!leading-[30px] before:!top-[11px]">
                  대한요가회 소속 강사 구인 지원
                </li>
                <li className="!leading-[30px] before:!top-[11px]">
                  대한요가회 주관 행사 참석 기회 우선 제공
                </li>
                <li className="!leading-[30px] before:!top-[11px]">
                  대한요가회 공식인증센터 네트워크 활동
                </li>
                <li className="!leading-[30px] before:!top-[11px]">
                  우수 인증센터 표창 및 포상
                </li>
                <li className="!leading-[30px] before:!top-[11px]">
                  대한요가회 홈페이지, SNS 채널을 통한 홍보 지원
                </li>
              </ul>
            </li>
            <li className="col-start-2 row-start-5 row-span-1 pt-[30px] pb-[30px]  border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                연간회비
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">300,000원</p>
            </li>
            <li className="col-start-2 row-start-6 row-span-1 pt-[30px] pb-[30px]  border-b border-[#eee]">
              <strong className="block text-[20px] font-bold leading-[25px]">
                접수방법
              </strong>
              <p className="mt-[10px] text-[16px] leading-[25px]">
                대한요가회 공식인증센터 입회 URL
              </p>
            </li>
          </ul>
        </div>
        <div>
          <strong className="block mt-[60px] text-[32px] font-bold leading-[46px]">
            입회 절차
          </strong>
          <ul className="flex flex-row gap-[24px] mt-[40px]">
            <li className="flex basis-[267px] flex-col items-center text-center">
              <i>
                <Image
                  src="/images/member/i_centers_01.jpg"
                  alt="자격증이란"
                  width={120}
                  height={120}
                />
              </i>
              <div className="mt-[10px]">
                <strong className="block mt-[10px] text-[16px] font-bold leading-[25px] text-primary">
                  선정
                </strong>
                <p className="mt-[7px] text-[16px] leading-[25px]">
                  대한요가회 공식인증센터 <br />
                  URL을 통해 신청 양식 제출
                </p>
              </div>
            </li>
            <li className="flex basis-[267px] flex-col justify-center items-center text-center">
              <i>
                <Image
                  src="/images/member/i_centers_02.jpg"
                  alt="심사"
                  width={120}
                  height={120}
                />
              </i>
              <div className="mt-[10px]">
                <strong className="block mt-[10px] text-[16px] font-bold leading-[25px] text-primary">
                  심사
                </strong>
                <p className="mt-[7px] text-[16px] leading-[25px]">
                  대한요가회 공식인증센터 <br />
                  선정 기준을 바탕으로 1차 <br />
                  서류 심사
                </p>
              </div>
            </li>
            <li className="flex basis-[267px] flex-col justify-center items-center text-center">
              <i>
                <Image
                  src="/images/member/i_centers_03.jpg"
                  alt="정"
                  width={120}
                  height={120}
                />
              </i>
              <div>
                <strong className="block mt-[10px] text-[16px] font-bold leading-[25px] text-primary">
                  선정
                </strong>
                <p className="mt-[7px] text-[16px] leading-[25px]">
                  심사에 통과한 센터는 <br />
                  공식인증센터로 선정
                </p>
              </div>
            </li>
            <li className="flex basis-[267px] flex-col justify-center items-center text-center">
              <i>
                <Image
                  src="/images/member/i_centers_04.jpg"
                  alt="혜택"
                  width={120}
                  height={120}
                />
              </i>
              <div>
                <strong className="block mt-[10px] text-[16px] font-bold leading-[25px] text-primary">
                  혜택
                </strong>
                <p className="mt-[7px] text-[16px] leading-[25px]">
                  인증 유지를 위한 연간회비 <br />
                  납부 후 혜택 사항 제공
                </p>
              </div>
            </li>
          </ul>
          <div className="flex justify-center mt-[60px]">
            <Link
              href="https://forms.gle/mC4XxXAn6SHZ61g36"
              target="_blank"
              className="btn-more-link primary"
            >
              공식인증센터 입회 신청
            </Link>
          </div>
        </div>
        <Suspense fallback={<DetailLoading />}>
          <BranchList initialData={initialData}  url={url} title={"지역별 공인인증센터"}/>
        </Suspense>
      </section>
    </Contents>
  );
}
