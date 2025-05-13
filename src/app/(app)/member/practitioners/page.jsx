import React from "react";
import Image from "next/image";
import Col, { LeftCont, RightCont } from "@/components/layout/col-layout";
import Contents from "@/components/layout/contents";
import Link from "next/link";
import {
  Table,
  TableHeader,
  TableBody,
  TableCell,
  TableRow,
  TableHead,
} from "@/components/ui/table";

export default function PractitionersPage() {
  return (
    <Contents title="수련자" backgroundImage="/images/member/banner_about.jpg">
      {/* 협회 단체 사진 영역 */}
      <section className="overflow-hidden bg-white">
        <div>
          <strong className="block text-[32px] font-bold leading-[46px]">
            수련자란? <br />
            대한요가회에서 명명하는 요가를 하는 사람
          </strong>
        </div>
        <div className="mt-[40px]">
          <Image
            src="/images/member/practitioners.jpg"
            alt="수련자"
            width={1140}
            height={450}
          />
        </div>
        <strong className="block mt-[40px] text-[20px] font-bold leading-[25px] text-primary">
          Yoga Training Certificate
        </strong>
        <strong className="block mt-[10px] text-[32px] font-bold leading-[46px]">
          요가 수련 인증서
        </strong>
        <ul className="bullet-list mt-[20px]">
          <li>
            요가를 체계적으로 배우고 실천하는 수련자의 노력과 성취를
            대한요가회에서 공식적으로 인증하는 급수제 제도
          </li>
          <li>
            요가를 꾸준히 실천하는 수련자를 공식적으로 인정하고 지속적인 도전을
            통해 요가적 삶을 실천하는 길잡이
          </li>
          <li>
            요가 수련 인증서를 받는 이는 단순한 요가 수련자가 아니라 자신의
            내면의 몸을 탐구하고 지속적으로 성장하는 요가 실천자로 인정
          </li>
        </ul>
        <Table className="mt-[60px]">
          <TableHeader>
            <TableRow>
              <TableHead>급수</TableHead>
              <TableHead>수련시간</TableHead>
              <TableHead>혜택사항</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="text-center">입문</TableCell>
              <TableCell className="text-center">10시수</TableCell>
              <TableCell>입문축하카드, 모바일 카드</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">8급</TableCell>
              <TableCell className="text-center">24시수</TableCell>
              <TableCell>입문축하카드, 모바일 카드</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">7급</TableCell>
              <TableCell className="text-center">48시수</TableCell>
              <TableCell>러버밴드, 요가 자세 포스터, 요가 양말 </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">6급</TableCell>
              <TableCell className="text-center">96시수 (1년)</TableCell>
              <TableCell>
                러버밴드, 요가 스트레칭 밴드, 명상 쿠션, 요가 젤패드
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">5급</TableCell>
              <TableCell className="text-center">192시수 (2년)</TableCell>
              <TableCell>
                러버밴드, 요가 블록, 요가 타월, 아로마 테라피 오일
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">4급</TableCell>
              <TableCell className="text-center">288시수 (3년)</TableCell>
              <TableCell>러버밴드, 요가 매트, 요가 양말</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">3급</TableCell>
              <td className="text-center">480시수 (5년)</td>
              <TableCell>러버밴드, 요가 매트, 대한요가회 행사 초청</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">2급</TableCell>
              <TableCell className="text-center">960시수 (10년)</TableCell>
              <TableCell>러버밴드, 요가 의류, 대한요가회 행사 초청</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="text-center">1급</TableCell>
              <TableCell className="text-center">1,920시수 (20년)</TableCell>
              <TableCell>
                러버밴드, 요가 매트, 요가 의류, 대한요가회 행사 초청
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
        <div className="flex justify-center mt-[60px]">
          <Link href="/member/centers" className="btn-more-link primary">
            공식인증센터 찾기
          </Link>
        </div>
      </section>
    </Contents>
  );
}
