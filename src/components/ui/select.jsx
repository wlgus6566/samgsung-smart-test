import * as React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";

function Select({ ...props }) {
  return <SelectPrimitive.Root {...props} />;
}

function SelectGroup({ ...props }) {
  return <SelectPrimitive.Group {...props} />;
}

function SelectValue({ placeholder, ...props }) {
  return <SelectPrimitive.Value placeholder={placeholder} {...props} />;
}

function SelectTrigger({ className, children, disabled, ...props }) {
  return (
    <SelectPrimitive.Trigger
      className={cn(
        "flex h-14 w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-4 py-3.5 text-sm text-gray-800 placeholder:text-gray-400",
        "focus:border-blue-500 focus:ring-2 focus:ring-blue-500/10 outline-none",
        "disabled:cursor-not-allowed disabled:bg-gray-100 disabled:border-gray-200 disabled:text-gray-400",
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <Image
          src={
            disabled
              ? "/images/icon/ic_form_arrow_down_disabled.svg"
              : "/images/icon/ic_form_arrow_down.svg"
          }
          alt="arrow down"
          width={20}
          height={20}
          className="opacity-100 data-[disabled=true]:opacity-50"
        />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({ className, children, position = "popper", ...props }) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        className={cn(
          "relative z-50 min-w-[8rem] overflow-hidden rounded-xl border border-gray-200 bg-white text-gray-800 shadow-lg",
          "data-[state=open]:animate-in data-[state=open]:fade-in-0 data-[state=open]:zoom-in-95",
          "data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=closed]:zoom-out-95",
          "data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2",
          "mt-2 p-1",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1",
          className
        )}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-0",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)]"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
}

function SelectLabel({ className, ...props }) {
  return (
    <SelectPrimitive.Label
      className={cn(
        "py-1.5 pl-8 pr-2 text-sm font-semibold text-gray-500",
        className
      )}
      {...props}
    />
  );
}

function SelectItem({ className, children, disabled, ...props }) {
  return (
    <SelectPrimitive.Item
      className={cn(
        "relative flex w-full cursor-default select-none items-center rounded-lg py-3 px-4 text-sm outline-none data-[disabled]:pointer-events-none",
        "focus:bg-gray-50 focus:text-gray-900",
        "data-[highlighted]:bg-gray-50 data-[highlighted]:text-gray-900",
        "data-[state=checked]:bg-blue-50 data-[state=checked]:text-blue-600 data-[state=checked]:font-medium",
        "data-[disabled]:text-gray-300 data-[disabled]:hover:bg-transparent data-[disabled]:hover:text-gray-300",
        className
      )}
      disabled={disabled}
      {...props}
    >
      <span className="absolute right-3 flex h-3.5 w-3.5 items-center justify-center">
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="h-4 w-4 text-blue-600" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({ className, ...props }) {
  return (
    <SelectPrimitive.Separator
      className={cn("-mx-1 my-1 h-px bg-gray-200", className)}
      {...props}
    />
  );
}

function SelectScrollUpButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollUpButton
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-gray-500 hover:text-gray-700",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="h-4 w-4" />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({ className, ...props }) {
  return (
    <SelectPrimitive.ScrollDownButton
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-gray-500 hover:text-gray-700",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="h-4 w-4" />
    </SelectPrimitive.ScrollDownButton>
  );
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
};
