"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function Input({
  className,
  type = "text",
  placeholder,
  onSearch,
  ...inputProps
}) {
  return (
    <div className={cn("relative w-full", className)}>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(
          "h-[44px] px-[20px] py-[10px] rounded-full border border-[#E5E5E5] bg-white text-sm text-black placeholder:text-[#B0B0B0] placeholder:text-[16px]",
          "outline-none focus:border-black focus:ring-2 focus:ring-black/10 transition-all",
          "w-full appearance-none [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-cancel-button]:hidden"
        )}
        {...inputProps}
      />
      {type === "search" && (
        <Image
          src="/images/icon/ic_basic_20_search_black.svg"
          alt="search"
          role="button"
          width={20}
          height={20}
          onClick={onSearch}
          className="absolute right-[20px] top-1/2 -translate-y-1/2 cursor-pointer"
        />
      )}
      <style jsx>{`
        .search-input input {
          padding: 0 40px 0 6px;
          height: 40px;
          border: none;
          &:focus {
            border: none !important;
            box-shadow: none !important;
          }
        }
      `}</style>
    </div>
  );
}

export { Input };
