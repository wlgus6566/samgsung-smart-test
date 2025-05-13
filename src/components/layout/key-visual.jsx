"use client";

import React from "react";
import HeadBreadcrumb from "./head-breadcrumb";

export default function KeyVisual({ title, backgroundImage }) {
  return (
    <>
      <div className="key-visual relative h-[355px]">
        <div className="container-fixed relative h-full px-[20px] pt-[175px] z-10">
          <h1 className="heading-1 text-white">{title}</h1>
          <HeadBreadcrumb />
        </div>
      </div>
      <style jsx>{`
        .key-visual:before {
          content: "";
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 100%;
          height: 100%;
          background-image: url(${backgroundImage ||
          "/images/temp/test_bg.jpg"});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        }
      `}</style>
    </>
  );
}
