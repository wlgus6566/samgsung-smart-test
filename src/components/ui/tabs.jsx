import * as React from "react";
import * as TabsPrimitive from "@radix-ui/react-tabs";

import { cn } from "@/lib/utils";

function Tabs({ className, ...props }) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn("flex flex-col", className)}
      {...props}
    />
  );
}

function TabsList({ className, ...props }) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        "tabs-list inline-flex w-full max-w-[1140px] h-[55px] items-center justify-center overflow-hidden",
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        "not-first:border-l-0 not-last:border-r-0",
        "inline-flex h-full flex-1 items-center justify-center whitespace-nowrap px-3 py-1 text-md transition-all",
        "border-1 border-solid border-gray-200",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
        "data-[state=active]:bg-[#007FED] data-[state=active]:text-white data-[state=active]:border-[#007FED] data-[state=active]:font-bold",
        "data-[state=inactive]:bg-white data-[state=inactive]:text-[#666666]",
        "first:rounded-l-full last:rounded-r-full",
        "first:border-r-0 last:border-l-0",
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }) {
  return (
    <TabsPrimitive.Content
      data-slot="tabs-content"
      className={cn("flex-1 outline-none", className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
