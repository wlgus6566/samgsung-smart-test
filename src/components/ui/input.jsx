"use client";

import * as React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { EyeIcon, EyeOffIcon, XIcon, SearchIcon } from "lucide-react";

const Input = React.forwardRef(function Input(
  {
    className,
    containerClassName,
    type = "text",
    placeholder,
    value,
    onChange,
    onSearchClick,
    onClear,
    helperText,
    errorMessage,
    variant = "default",
    size = "medium",
    showClearButton,
    ...props
  },
  ref
) {
  const hasValue = Boolean(value && String(value).length > 0);
  const disabledSearchIconSrc = "/images/icon/ic_search_disabled_gray.svg";

  const baseInputClasses =
    "w-full body-4  px-4 py-4.25 rounded-2xl appearance-none bg-white text-black placeholder:text-gray-500 outline-none transition-all [&::-webkit-search-cancel-button]:appearance-none [&::-webkit-search-cancel-button]:hidden";

  const sizeClasses = {
    large: "h-15",
    medium: "h-12",
  };

  const variantInputClasses = {
    default:
      "border border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-500",
    error:
      "border border-red-600 focus:border-red-600 focus:ring-1 focus:ring-red-600",
    disabled:
      "bg-gray-300 border border-gray-300 text-gray-500 cursor-not-allowed placeholder:text-gray-500",
  };

  const showActualClearButton =
    onClear &&
    (showClearButton !== undefined ? showClearButton : hasValue) &&
    variant !== "disabled";

  return (
    <div className={cn("w-full", containerClassName)}>
      <div className={cn("relative flex items-center w-full", className)}>
        <input
          ref={ref}
          type={type === "password" && showPassword ? "text" : type}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={variant === "disabled"}
          className={cn(
            baseInputClasses,
            sizeClasses[size],
            variantInputClasses[variant],
            {
              "pr-10":
                type === "search" ||
                (type === "password" && variant !== "disabled") ||
                showActualClearButton,
            }
          )}
          {...props}
        />
        {type === "search" &&
          !showActualClearButton &&
          variant !== "disabled" &&
          onSearchClick && (
            <SearchIcon
              role="button"
              onClick={onSearchClick}
              className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer"
            />
          )}
        {type === "search" && variant === "disabled" && (
          <Image
            src={disabledSearchIconSrc}
            alt="Search disabled"
            width={20}
            height={20}
          />
        )}

        {showActualClearButton && (
          <XIcon
            role="button"
            onClick={() => onClear && onClear()}
            className="absolute right-[16px] top-1/2 -translate-y-1/2 cursor-pointer w-5 h-5 text-[var(--color-gray-500)] hover:text-[var(--color-gray-700)]"
          />
        )}
      </div>
    </div>
  );
});

Input.displayName = "Input";

export { Input };
