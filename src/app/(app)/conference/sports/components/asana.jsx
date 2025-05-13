import Image from "next/image";

export default function Asana() {
  return (
    <>
      <div className="intro-section flex gap-[30px]">
        <div className="pt-[50px]">
          <h3 className="font-bold text-xl text-[#007EED] mb-3">요가 아사나</h3>
          <strong className="block text-[44px] leading-[52px]">
            전통적 요가 형태로, 정확한 자세와 호흡 조화를 통해 신체·정신의
            균형을 추구합니다.
          </strong>
          <div className="mt-[20px] text-base leading-[24px]">
            명상적 요소와 신체적 수련이 조화롭게 결합되어 있으며, 요가의 본질적
            가치를 가장 잘 구현하는 종목입니다.
          </div>
        </div>

        <div className="flex-shrink-0 basis-[550px]">
          <Image
            src="/images/conference/sports/asana.png"
            alt="요가 아사나 운동 이미지"
            width={555}
            height={345}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      <ul className="mt-[60px] border-t-2 border-black">
        <li className="flex py-[30px]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            신체와 마음의 균형을 찾는 전통 요가
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/asana-01.png"
                alt="요가 아사나 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              아사나(Asana)는 산스크리트어로 '자리' 또는 '좌석'을 의미하며,
              요가의 가장 기본이 되는 실천 방법입니다. 전통적으로는 명상을 위한
              안정된 자세를 의미했으나, 현대에는 다양한 신체 동작을 포함하는
              개념으로 확장되었습니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            호흡과 움직임이 하나 되는 수련법
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/asana-02.png"
                alt="요가 아사나 운동 이미지"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-[10px] text-base leading-[24px]">
              요가 아사나는 신체와 마음의 연결을 바탕으로, 프라나의 흐름을
              원활히 하여 더 높은 의식을 추구합니다. 신체적 수행을 통해 정신적
              성장을 이루며, 궁극적으로 자아 인식과 깨달음에 이르는 도구로
              작용합니다. 이러한 철학은 현대 요가에서도 핵심 원리로 유지됩니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            체계적이고 단계적인 수행 방식
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/asana-03.png"
                alt="요가 아사나 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              요가 아사나는 안정성과 편안함의 균형을 중시하며, 호흡과 움직임의
              일치를 통해 신체와 마음의 조화를 추구합니다. 단계적이고 체계적인
              수련 과정을 통해 개인의 상태와 한계를 고려하며 점진적인 발전을
              돕습니다. 이는 안전하고 지속가능한 수련을 가능하게 하는 핵심
              원리입니다.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
