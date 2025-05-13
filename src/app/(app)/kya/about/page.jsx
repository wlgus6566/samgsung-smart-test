"use client";

import React, { useRef, useEffect } from "react";
import Img from "@/components/ui/img";
import Col, { LeftCont, RightCont } from "@/components/layout/col-layout";
import Contents from "@/components/layout/contents";
import Script from "next/script";

export default function AboutPage() {
  const mapEl = useRef(null);

  // 카카오맵 초기화 함수
  const initMap = () => {
    if (!window.kakao || !mapEl.current) return;

    window.kakao.maps.load(() => {
      const center = new window.kakao.maps.LatLng(37.520526, 127.115556);
      const options = {
        center,
        level: 3,
      };

      const map = new window.kakao.maps.Map(mapEl.current, options);
      const imageSrc = "/images/kya/map_marker.png";
      const imageSize = new window.kakao.maps.Size(77, 97);
      const imageOption = { offset: new window.kakao.maps.Point(27, 69) };
      const markerImage = new window.kakao.maps.MarkerImage(
        imageSrc,
        imageSize,
        imageOption
      );
      const markerPosition = new window.kakao.maps.LatLng(
        37.520526,
        127.115556
      );
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
        image: markerImage,
      });

      marker.setMap(map);

      // 마커 클릭 이벤트 추가
      window.kakao.maps.event.addListener(marker, "click", function () {
        window.open(
          "https://map.kakao.com/?urlX=525530&urlY=1116920&itemId=369631638&q=%EB%8C%80%ED%95%9C%EC%9A%94%EA%B0%80%ED%9A%8C&srcid=369631638&map_type=TYPE_MAP&from=roughmap",
          "_blank"
        );
      });
    });
  };

  useEffect(() => {
    // 스크립트가 이미 로드되어 있다면 맵 초기화
    if (window.kakao) {
      initMap();
    }
  }, []);

  return (
    <Contents title="소개" backgroundImage="/images/kya/kya_kv_bg.jpg">
      {/* 협회 단체 사진 영역 */}
      <section className="rounded-[20px] overflow-hidden bg-white">
        <Img
          src="/images/kya/about_top_bg.jpg"
          alt="대한요가회 단체사진"
          width={1140}
          height={300}
        />
      </section>

      {/* 협회 소개 콘텐츠 */}
      <section className="mt-[60px]">
        <Col>
          <LeftCont>
            <h2 className="heading-4">대한요가회 소개</h2>
          </LeftCont>
          <RightCont>
            <div className="flex flex-col gap-[10px] body-1">
              <p>
                대한요가회는 문화체육관광부 산하 대한체육회 정식 종목단체로서
                전국 9개시도지부 (60여개 시군구)가 결성되어 있습니다.
              </p>
              <p>
                대한요가회는 요가/필라테스를 통한 국민 건강 증진 및 요가 문화
                발전을 목표로 하는 대한체육회 산하 준회원단체입니다.
                '요가/필라테스를 통해 인류의 평화와 조화를 구현'하는 미션 아래,
                요가의 대중화, 전문화, 조직화, 사회기여, 국제관계 강화를 주요
                목표로 삼고 있습니다.
              </p>
              <p>
                전국 생활체육 프로그램 운영, 요가 지도자 양성, 국제 요가 대회
                개최, 사회공헌 활동 등을 통해요가 보급과 발전에 기여합니다.
                또한, 국제/전국진흥/대회/심판/교육/스포츠공정/홍보/행사/필라테스
                위원회 등 다양한 위원회를 구성하여 체계적인 조직 운영을
                수행합니다.
              </p>
            </div>
          </RightCont>
        </Col>
      </section>

      {/* 미션 및 비전 */}
      <section className="mt-[40px]">
        <hr className="hr" />
        <Col className="mt-[40px]">
          <LeftCont>
            <h2 className="heading-4">Mission&Vision</h2>
          </LeftCont>
          <RightCont>
            <div className="flex flex-col gap-[10px] body-1">
              <p>
                <b>Mission: </b>요가/필라테스를 통해 인류의 '평화'와 '조화' 구현
              </p>
              <p>
                <b>Vision: </b>요가/필라테스로 건강한 대한민국을 실현하고, 세계
                요가 문화의 중심으로 도약한다.
              </p>
            </div>
          </RightCont>
        </Col>
      </section>

      {/* 협회 오시는 길 */}
      <section className="mt-[40px]">
        {/* 카카오맵 스크립트 */}
        <Script
          src={`//dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.NEXT_PUBLIC_KAKAO_JAVASCRIPT_KEY}&libraries=services,clusterer&autoload=false`}
          strategy="afterInteractive"
          onLoad={initMap}
        />
        <hr className="hr" />
        <div
          ref={mapEl}
          style={{ width: "1140px", height: "550px" }}
          className="mt-[80px] overflow-hidden rounded-[20px]"
        ></div>
        <Col className="mt-[40px]">
          <LeftCont>
            <h2 className="heading-4">대한요가회 오시는 길</h2>
          </LeftCont>
          <RightCont>
            <div className="flex flex-col body-1">
              <p>
                서울시 송파구 올림픽로 424, 올림픽회관 신관 321호 <br />
                <b>Mail:</b> yoga@sports.or.kr <br />
                <b>Tel:</b> 02-443-7330 / 070-4151-7331~2 <br />
                <b>Fax:</b> 02-401-5936 <br />
              </p>
            </div>
          </RightCont>
        </Col>
      </section>
    </Contents>
  );
}
