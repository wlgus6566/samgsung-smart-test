import Image from "next/image";

export default function Pilates() {
  return (
    <>
      <div className="intro-section flex gap-[30px]">
        <div className="pt-[50px]">
          <h3 className="font-bold text-xl text-[#007EED] mb-3">필라테스</h3>
          <strong className="block text-[44px] leading-[52px]">
            필라테스는 균형과 코어 근력을 강화하며, 자세 교정과 유연성 향상에
            효과적인 운동입니다.
          </strong>
          <div className="mt-[20px] text-base leading-[24px]">
            필라테스는 크게 매트 필라테스와 기구 필라테스로 나뉘며, 각각의 특징과
            난이도에 따라 다양한 종목이 존재합니다.
          </div>
        </div>

        <div className="flex-shrink-0 basis-[550px]">
          <Image
            src="/images/conference/sports/pilates.png"
            alt="필라테스 운동 이미지"
            width={320}
            height={66}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      <div className="mt-[60px] pt-[30px] border-t-2 border-black flex">
        <h3 className="font-bold text-xl basis-1/2">매트 필라테스</h3>
        <div className="basis-1/2 text-base leading-[24px]">
          <p className="text-base leading-[24px]">
            바닥에 매트를 깔고 몸의 무게를 이용해 동작을 수행하는 방식입니다. 기구
            없이 진행되므로 공간 제약이 적고, 집에서도 쉽게 할 수 있습니다.
          </p>
          <strong className="mt-[20px] block ">대표적인 동작:</strong>
          <ul className="mt-[10px] bullet-list">
            <li>롤 업(Roll Up): 척추를 하나씩 세우며 앉았다가 다시 눕는 동작</li>
            <li>
              백 익스텐션(Back Extension): 등을 펴고 상체를 들어 척추 근육을
              강화하는 동작
            </li>
            <li>
              레그 서클(Leg Circle): 다리를 공중에 띄워 원을 그리며 하체 근력을
              단련
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-[30px] pt-[30px] border-t-1 border-[#eeeeee] flex">
        <h3 className="font-bold text-xl basis-1/2">기구 필라테스</h3>
        <div className="basis-1/2">
          <p className="text-base leading-[24px]">
            리포머, 캐딜락, 체어, 배럴 등의 기구를 활용해 운동하는 방식으로,
            기구의 탄성력을 이용해 근육을 더 정교하게 단련할 수 있습니다.
          </p>
          <strong className="mt-[20px] block ">주요 기구 및 특징:</strong>
          <ul className="mt-[10px] bullet-list text-base leading-[24px]">
            <li>
              리포머(Reformer): 가장 대표적인 기구로, 슬라이딩 플랫폼과 스프링을
              활용해 다양한 난이도의 운동을 할 수 있음
            </li>
            <li>
              캐딜락(Cadillac): 철제 프레임과 바, 스프링을 사용해 공중에서 동작을
              수행하며, 재활 운동에도 많이 활용됨
            </li>
            <li>
              체어(Chair): 균형 감각과 코어 근력을 키우는 데 효과적인 작은 크기의
              기구로
            </li>
            <li>배럴(Barrel): 척추 정렬과 가동성 향상에 도움을 주는 기구</li>
          </ul>
        </div>
      </div>
    </>
  );
}
