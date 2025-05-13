import React from "react";
import Image from "next/image";
import Contents from "@/components/layout/contents";
import KeyVisual from "@/components/layout/key-visual";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Table,
  TableBody,
  TableCell,
  TableCaption,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// 위원회 데이터
const committeeData = [
  {
    name: "국제위원회",
    functions: ["국제행사 유치", "국제대회 참가 승인"],
  },
  {
    name: "전국진흥위원회",
    functions: [
      "시/도 요가회 등록 사업 및 지역 진흥 사업",
      "준회원, 정회원 승급 지원",
      "공공기관 연계사업 추진",
      "문체부 체육지도자 자격증 등록 사업",
    ],
  },
  {
    name: "교육위원회",
    functions: [
      "요가지도사 교육 및 자격검정",
      "교육 정책 수립 및 교재 편찬",
      "인증교육기관 사업",
    ],
  },
  {
    name: "대회위원회",
    functions: ["전국대회 및 국내대회 진행", "행사 지원", "선수 선발 및 관리"],
  },
  {
    name: "심판위원회",
    functions: ["경기규정 확립 및 교육", "심사위원 교육 및 자격검증"],
  },
  {
    name: "홍보위원회",
    functions: [
      "대한요가회 사업 홍보",
      "지역진흥 위원회 지원",
      "행사 지원 (세계요가의날/세계명상의날)",
    ],
  },
  {
    name: "필라테스위원회",
    functions: ["필라테스 대회", "필라테스 인증센터 및 인증교육기관 관리"],
  },
  {
    name: "명상위원회",
    functions: ["세계명상의날 (12월 21일) 기념", "명상 관련 사업 기획"],
  },
  {
    name: "인사위원회",
    functions: [
      "사무처 인사 심사 업무",
      "사무처 인사 상벌 업무",
      "사무처 채용 업무",
    ],
  },
  {
    name: "스포츠공정위원회",
    functions: [
      "규정 개정 및 제정에 관한 사항",
      "제규정 관리 및 시/도 요가회 유권해석",
      "상벌 및 포상에 관한 사항",
    ],
  },
  {
    name: "심사위원회",
    functions: [
      "생활체육 유공자 문화체육관광부 장관 표창 추천",
      "포상 시상 심사",
    ],
  },
];

export default function organization() {
  return (
    <Contents title="조직도" backgroundImage="/images/kya/kya_kv_bg.jpg">
      {/* todo: tab 영역 */}
      <Tabs defaultValue="organization">
        <TabsList className="mb-[60px]">
          <TabsTrigger value="organization">조직도</TabsTrigger>
          <TabsTrigger value="committee">대한요가회 위원회</TabsTrigger>
        </TabsList>
        <TabsContent value="organization">
          <section className="rounded-[20px] overflow-hidden bg-white">
            <Image
              src="/images/kya/organization/organization_cont_1.jpg"
              alt="조직도"
              width={1140}
              height={300}
              className="w-full h-auto object-cover"
            />
          </section>
        </TabsContent>
        <TabsContent value="committee">
          <section>
            <Table className="w-full">
              <colgroup>
                <col className="w-2/5" />
                <col className="w-3/5" />
              </colgroup>
              <TableCaption>
                대한요가회 위원회는 대한요가회의 활동을 지원하고 조직하는 기능을
                담당합니다.
              </TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>명칭</TableHead>
                  <TableHead>주요 기능</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {committeeData.map((committee, index) => (
                  <TableRow key={`committee-${index}`}>
                    <TableCell className="text-center">
                      {committee.name}
                    </TableCell>
                    <TableCell>
                      <ul className="list-disc list-inside">
                        {committee.functions.map((func, funcIndex) => (
                          <li key={`function-${index}-${funcIndex}`}>{func}</li>
                        ))}
                      </ul>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </section>
        </TabsContent>
      </Tabs>
    </Contents>
  );
}
