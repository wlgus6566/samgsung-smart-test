import React from "react";
import DialogBase from "@/components/dialog";
import { Button } from "@/components/ui/button";
import { useDialogStore } from "@/store/dialog";

// 1급 갱신 대상 정보
const level1Info = [
  "각 광역시/도 및 중앙 이사급 이상인 자",
  "각 시/군 부회장 이상인 자",
  "요가 관련 석박사 이상인 자",
  "대한요가회 2급 자격증 경력 3년 이상인 자",
  "타 단체 요가 자격증 1급 이상인 자",
  "요가 자격증 경력 10년 이상인 자",
  "전국 요가 대회 입상자(금메달, 대상)",
];

// 2급 갱신 대상 정보
const level2Info = [
  "대한요가회에서 인정하는 타 단체 요가 자격증 2,3급 이상의 소지자",
];

export function QualificationInfo1Dialog() {
  const { dialogClose } = useDialogStore();

  return (
    <DialogBase
      name="qualification-info-1"
      title="생활체육요가지도사 자격증 1급 갱신 대상"
      footer={
        <Button
          onClick={() => dialogClose("qualification-info-1")}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
        >
          확인
        </Button>
      }
    >
      <div className="py-4 max-w-[425px]">
        <ul className="list-disc pl-6 space-y-3">
          {level1Info.map((info, index) => (
            <li key={index} className="text-[16px] leading-[1.5] text-[#333]">
              {info}
            </li>
          ))}
        </ul>
      </div>
    </DialogBase>
  );
}

export function QualificationInfo2Dialog() {
  const { dialogClose } = useDialogStore();

  return (
    <DialogBase
      name="qualification-info-2"
      title="생활체육요가지도사 자격증 2급 갱신 대상"
      footer={
        <Button
          onClick={() => dialogClose("qualification-info-2")}
          className="w-full bg-primary hover:bg-primary/90 text-white font-bold"
        >
          확인
        </Button>
      }
    >
      <div className="py-4 max-w-[425px]">
        <ul className="list-disc pl-6 space-y-3">
          {level2Info.map((info, index) => (
            <li key={index} className="text-[16px] leading-[1.5] text-[#333]">
              {info}
            </li>
          ))}
        </ul>
      </div>
    </DialogBase>
  );
}

// 기본 내보내기 - 두 컴포넌트 모두 표시
export default function QualificationInfoDialogs() {
  return (
    <>
      <QualificationInfo1Dialog />
      <QualificationInfo2Dialog />
    </>
  );
}
