import Image from "next/image";

export default function Artistic() {
  return (
    <>
      <div className="intro-section flex gap-[30px]">
        <div className="pt-[50px]">
          <h3 className="font-bold text-xl text-[#007EED] mb-3">
            아티스틱 요가
          </h3>
          <strong className="block text-[44px] leading-[52px]">
            요가의 원리와 예술적 표현을 결합해 감정과 창의성을 자유롭게 표현하는
            요가입니다.
          </strong>
          <div className="mt-[20px] text-base leading-[24px]">
            예술의 요소들을 요가와 조화롭게 결합하여 새로운 차원의 표현을
            추구하는 종목 입니다.
          </div>
        </div>

        <div className="flex-shrink-0 basis-[550px]">
          <Image
            src="/images/conference/sports/artistic.png"
            alt="아티스틱 요가 운동 이미지"
            width={555}
            height={345}
            className="w-full h-auto rounded-md"
          />
        </div>
      </div>

      <ul className="mt-[60px] border-t-2 border-black">
        <li className="flex py-[30px]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            예술적 표현과 요가의 만남
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/artistic-01.png"
                alt="아티스틱 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              아티스틱 요가는 요가의 기본 원리와 예술적 표현을 융합한 현대적
              요가입니다. 개인의 창의성과 표현의 자유를 통해 요가의 새로운
              가능성을 탐구합니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            감정을 몸으로 표현하는 창조적 접근
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/artistic-02.png"
                alt="아티스틱 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>

            <p className="mt-[10px] text-base leading-[24px]">
              아티스틱 요가는 예술적 표현을 통한 자아 탐구에 중점을 두며, 창조적
              에너지의 자유로운 표출로 내면의 자아를 발견하고 표현하는 것을
              목표로 합니다. 신체를 통한 감정 표현과 개별적 독창성을 존중하며,
              요가를 신체 수련을 넘어 자기 표현과 예술적 승화의 도구로
              확장합니다.
            </p>
          </div>
        </li>

        <li className="flex py-[30px] border-t border-[#eeeeee]">
          <h4 className="basis-1/2 mt-[20px] font-bold text-xl">
            스토리텔링과 움직임이 조화된 수련법
          </h4>
          <div className="basis-1/2">
            <div className="w-[160px] h-[160px] relative">
              <Image
                src="/images/conference/sports/artistic-03.png"
                alt="아티스틱 요가 운동 이미지"
                fill
                className="object-cover"
              />
            </div>
            <p className="mt-[10px] text-base leading-[24px]">
              아티스틱 요가는 전통 요가에 예술적 요소를 접목해 새로운 차원의
              수련을 제시합니다. 창의적 해석과 감정·동작의 조화를 통해 깊이 있는
              자기 표현을 가능하게 하며, 스토리텔링을 활용해 단순한 동작이 아닌
              예술적 작품으로서의 요가를 구현합니다.
            </p>
          </div>
        </li>
      </ul>
    </>
  );
}
