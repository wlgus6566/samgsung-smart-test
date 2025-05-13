import Image from "next/image";

export default function Group() {
  return (
    <>
      <div className="intro-section flex gap-[30px]">
        <div className="pt-[50px]">
          <h3 className="font-bold text-xl text-[#007EED] mb-3">단체전 요가</h3>
          <strong className="block text-[44px] leading-[52px]">
            서로 간의 호흡과 움직임의 일치를 통해 더 높은 차원의 요가를 추구하는
            종목 입니다.
          </strong>
          <div className="mt-[20px] text-base leading-[24px]">
            팀원들 간의 호흡과 움직임의 일치를 통해 더 높은 차원의 요가 경험을
            추구합니다.
          </div>
        </div>

        <div className="flex-shrink-0 basis-[550px]">
          <Image
            src="/images/conference/sports/group.png"
            alt="단체전 요가 운동 이미지"
            width={555}
            height={345}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      <ul className="mt-[60px] border-t-2 border-black">
        <li className="flex py-[30px]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            개인을 넘어선 공동체적 요가
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/group-01.png"
                alt="단체전 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              단체전 요가는 요가의 공동체적 가치를 현대적으로 재해석한
              형태입니다. 개인의 수행을 넘어 집단적 조화와 유대감을 통해 요가의
              새로운 차원을 탐구합니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            집단 에너지를 통한 시너지 효과
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/group-02.png"
                alt="단체전 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-[10px] text-base leading-[24px]">
              단체전 요가는 집단적 조화와 일체감을 바탕으로 공동체 의식을
              강화하고 신뢰와 협력을 실현하는 것을 목표로 합니다. 집단 에너지의
              시너지 효과를 통해 개인이 혼자서는 경험하기 어려운 높은 차원의
              에너지와 의식을 체험하도록 돕습니다. 이는 현대 사회에서 약화된
              공동체 의식을 요가를 통해 회복하려는 철학을 반영합니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            균형과 협력의 완벽한 조화
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/group-03.png"
                alt="단체전 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              단체전 요가의 핵심 특징은 팀원 간의 호흡과 동작의 완벽한 조화에
              있습니다. 개인의 에너지가 모여 형성되는 집단적 에너지의 순환을
              중요시하며, 이는 상호 지지와 협력을 통해 달성됩니다. 공동체적
              표현을 강조하면서도 각 개인의 역할과 중요성을 인정하는 균형 잡힌
              접근을 통해, 현대 요가의 새로운 가능성을 제시합니다.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
