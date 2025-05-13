import Image from "next/image";

export default function Rhythmic() {
  return (
    <>
      <div className="intro-section flex gap-[30px]">
        <div className="pt-[50px]">
          <h3 className="font-bold text-xl text-[#007EED] mb-3">리드믹 요가</h3>
          <strong className="block text-[44px] leading-[52px]">
            리드믹요가는 두 명의 선수가 음악에 맞춰 동일한 아사나를 좌우 대칭
            또는 데칼코마니(거울대칭) 형식으로 동시에 수행하는 요가 입니다.
          </strong>
          <div className="mt-[20px] text-base leading-[24px]">
            동작의 대칭성, 완벽한 동기화, 음악과의 리듬적 일치가 중요합니다.
          </div>
        </div>

        <div className="flex-shrink-0 basis-[550px]">
          <Image
            src="/images/conference/sports/rhythmic.png"
            alt="리드믹 요가 운동 이미지"
            width={555}
            height={345}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      <ul className="mt-[60px] border-t-2 border-black">
        <li className="flex py-[30px]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            음악과 움직임이 결합된 새로운 요가
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/rhythmic-01.png"
                alt="리드믹 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              리드믹 요가는 전통 요가의 흐름에 현대적 리듬과 움직임을 결합한
              혁신적인 요가 형태입니다. 음악과 호흡, 동작의 조화를 통해 요가의
              새로운 차원을 탐구합니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            자유로운 움직임을 통한 에너지 순환
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/rhythmic-02.png"
                alt="리드믹 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-[10px] text-base leading-[24px]">
              리드믹 요가는 움직임을 통한 에너지 순환을 현대적으로 해석하며,
              음악과 신체의 조화로 깊은 자아 표현을 추구합니다. 자유로운
              움직임을 통해 해방감과 창조적 에너지를 강조하며, 전통적 요가와
              현대인의 예술적 감성을 연결하는 역할을 합니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            호흡과 리듬의 조화를 이루는 수련 방식
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/rhythmic-03.png"
                alt="리드믹 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              리드믹 요가는 음악과 동작의 유기적 결합을 통해 자연스러운 에너지
              흐름을 형성합니다. 호흡과 리듬의 조화로 신체 인식을 깊게 하며,
              자유로운 표현을 강조하면서도 요가의 기본 원리를 유지해 전통과
              현대성이 조화된 수련 방식을 제공합니다.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
