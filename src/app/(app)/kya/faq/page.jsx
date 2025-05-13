import React from "react";
import Contents from "@/components/layout/contents";
import { FAQAccordion } from "@/components/ui/faq-accordion";

const faqData = [
  {
    
    items: [
      {
        category: "일반",
        question: "대한요가회는 어떤 단체인가요?",
        answer: [
          "대한요가회는 대한체육회 산하 준단체로 대한민국의 요가 발전과 보급을 위해 설립되었으며, 요가 교육, 지도사 양성, 행사 및 대회 개최 등 다양한 활동을 진행하고 있습니다.",
        ],
      },
      {
        category: "종목",
        question: "요가는 종교적인 성향이 있나요?",
        answer:
          "요가는 인류 문화의 유선으로써 약 5천년 전부터 수행 되었으며, 요가의 문화는 철학 종교 과학의 지대한 여향을 미쳤습니다. 따라서 요가는 종교적 차원을 넘어서 인류 문화의 소중한 자산이 되며 이를 인정하여 국제기구 UN에서 세계 요가의 날을 지정하였습니다.",
      },
      {
        category: "종목",
        question: "요가는 신체에 어떤 이점이 있나요?",
        answer: [
          "요가는 유연성을 증가시키고 근력을 강화하며, 균형 감각과 자세 교정에 도움을 줍니다.",
          "관절의 가동 범위를 넓혀 부상을 예방하고, 혈액순환을 개선하여 신진대사를 촉진합니다.",
          "깊은 호흡과 명상을 통해 스트레스를 줄이고, 심신의 안정과 집중력을 향상시킵니다.",
          "면역력을 강화하고 수면의 질을 높이는 데에도 긍정적인 영향을 미칩니다.",
        ],
      },
      {
        category: "자격증",
        question: "지도자 자격증은 어떻게 신청하나요?",
        answer:
          "대한요가회 생활체육요가지도사 자격증은 대한요가회 인증교육기관만을 통해 서류 심사를 거쳐 신청 가능합니다.",
      },
      {
        category: "자격증",
        question: "지도자 자격증 등급별 기준이 어떻게 되나요?",
        answer:
          "대한요가회 홈페이지 내 규정을 확인 하시거나 가까운 인증교육기관에 문의바랍니다.",
      },
      {
        category: "자격증",
        question: "생활체육요가지도자 자격증 취득이 가능한가요?",
        answer:
          "대한체육회 산하 준단체 대한요가회가 공인 인증하는 자격증이며, ‘생활스포츠지도사’ 자격증요가 종목 추가를 위해 심의 추진 중 입니다.",
      },
      {
        category: "인증",
        question: "공식인증센터는 어떻게 신청하나요?",
        answer:
          "공식인증센터는 온라인으로 신청 받고 있으며 자세한 사항은 홈페이지 회원 – 공식인증센터에서 확인 가능합니다.",
      },
      {
        category: "일반",
        question: "대한요가회 후원 및 협력 관련 문의를 하고 싶습니다.",
        answer:
          "대한요가회 홍보팀 이메일 (kya-prt@idayofyoga.kr)로 제안 조건과 함께 문의 부탁드립니다.",
      },
    ],
  },
];

// 서버 컴포넌트에서 데이터 가져오기
async function getFaqData() {
  // 실제 API 호출 코드로 대체 (현재는 목업 데이터 사용)
  // const res = await fetch('https://api.example.com/faq')
  // const data = await res.json()
  // return data

  // 목업 데이터 반환 (API 연동 전까지 사용)
  return faqData;
}

export default async function FaqPage() {
  // 서버 컴포넌트에서 데이터 가져오기
  const faqData = await getFaqData();

  return (
    <Contents title="FAQ" backgroundImage="/images/kya/kya_kv_bg.jpg">
      <div className="table w-full h-[80px]  text-center border-t-2 border-black">
        <strong className="table-cell w-[14%] py-[15px] px-[30px] align-middle  text-base font-bold">
          분류
        </strong>
        <strong className="table-cell py-[15px] px-[30px] align-middle text-base font-bold">
          질문/답변
        </strong>
      </div>
      <FAQAccordion data={faqData} />
    </Contents>
  );
}
