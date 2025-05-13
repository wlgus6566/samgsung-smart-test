"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useEffect, useRef, useState } from "react";

export default function KvCarousel() {
  const [emblaApi, setEmblaApi] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(null);
  const autoplayRef = useRef(null);

  // 초기 마운트 이후 index 설정
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();
  }, [emblaApi]);

  // 자동 슬라이드
  useEffect(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearInterval(autoplayRef.current);

    autoplayRef.current = setInterval(() => {
      if (!emblaApi) return;
      emblaApi.canScrollNext() ? emblaApi.scrollNext() : emblaApi.scrollTo(0);
    }, 3000);

    return () => clearInterval(autoplayRef.current);
  }, [emblaApi]);

  return (
    <>
      <Carousel
        setApi={setEmblaApi}
        opts={{ loop: true, draggable: false }}
        className="pointer-events-none select-none"
      >
        <CarouselContent className="ml-0">
          {/* 첫 번째 슬라이드 */}
          <CarouselItem className="pl-0">
            <Slide
              image="/images/home/kv.jpg"
              isActive={selectedIndex === 0}
              title={
                <>
                  대한요가회는
                  <br />
                  요가 인증기관을 심사합니다
                </>
              }
            />
          </CarouselItem>

          {/* 두 번째 슬라이드 */}
          <CarouselItem className="pl-0">
            <Slide
              image="/images/home/kv_2.jpg"
              isActive={selectedIndex === 1}
              title={
                <>
                  요가·필라테스로
                  <br />
                  평화롭고 조화로운 세상을 만듭니다
                </>
              }
            />
          </CarouselItem>
        </CarouselContent>
      </Carousel>

      <style jsx global>{`
        @keyframes slideUp {
          0% {
            opacity: 0;
            transform: translateY(40px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .slide-text {
          opacity: 0;
          animation: slideUp 1s ease-out forwards;
          animation-delay: 0.2s;
        }
      `}</style>
    </>
  );
}

function Slide({ image, title, isActive }) {
  return (
    <div
      className="bg-image-cover bg-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="container-fixed h-[757px] relative">
        {isActive && (
          <h2 className="heading-1 pt-[365px] text-white tracking-[-1.8px] leading-[86px] slide-text">
            {title}
          </h2>
        )}
      </div>
    </div>
  );
}
