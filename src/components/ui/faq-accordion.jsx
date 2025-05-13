import * as React from "react";
import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { ChevronDownIcon } from "lucide-react";

import { cn } from "@/lib/utils";

// 응답 렌더링 컴포넌트 분리
function AccordionAnswer({ answer }) {
  if (Array.isArray(answer)) {
    return answer.map((answerItem, index) => (
      <AccordionBulletItem key={index}>{answerItem}</AccordionBulletItem>
    ));
  }

  return <p className="text-base text-black">{answer}</p>;
}

// FAQ 항목 컴포넌트 분리
function FaqItem({ item, categoryIndex, itemIndex }) {
  return (
    <AccordionItem
      key={`${categoryIndex}-${itemIndex}`}
      value={`${categoryIndex}-${itemIndex}`}
    >
      <AccordionTrigger category={item.category}>
        {item.question}
      </AccordionTrigger>
      <AccordionContent>
        <AccordionAnswer answer={item.answer} />
      </AccordionContent>
    </AccordionItem>
  );
}

// 카테고리별 FAQ 목록 컴포넌트 분리
function CategoryItems({ category, categoryIndex }) {
  return category.items.map((item, itemIndex) => (
    <FaqItem
      key={`${categoryIndex}-${itemIndex}`}
      item={item}
      categoryIndex={categoryIndex}
      itemIndex={itemIndex}
    />
  ));
}

function FAQAccordion({ data, className, ...props }) {
  return (
    <div className={cn("w-full", className)}>
      <Accordion type="multiple">
        {data.map((category, categoryIndex) => (
          <CategoryItems
            key={category.category || `category-${categoryIndex}`}
            category={category}
            categoryIndex={categoryIndex}
          />
        ))}
      </Accordion>
    </div>
  );
}

function Accordion({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Root
      data-slot="accordion"
      className={cn("w-full border-b border-[#eeeeee]", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Root>
  );
}

function AccordionItem({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Item
      data-slot="accordion-item"
      className={cn("border-t border-[#eeeeee]", className)}
      {...props}
    >
      {children}
    </AccordionPrimitive.Item>
  );
}

function AccordionTrigger({ className, category, children, ...props }) {
  return (
    <AccordionPrimitive.Header className="flex w-full">
      <AccordionPrimitive.Trigger
        data-slot="accordion-trigger"
        className={cn(
          "flex w-full items-center justify-between py-[18px] text-left outline-none group",
          className
        )}
        {...props}
      >
        <div className="flex w-full justify-between items-center">
          <div className="table w-full whitespace-normal">
            <span className="table-cell w-[14%] py-[15px] px-[30px] align-middle text-base text-center group-data-[state=open]:font-bold">
              {category}
            </span>
            <span className="table-cell py-[15px] px-[30px] align-middle text-base group-data-[state=open]:font-bold">
              {children}
            </span>
          </div>
          <ChevronDownIcon className="mr-[10px] size-5 shrink-0 text-black transition-transform duration-200 group-data-[state=open]:rotate-180" />
        </div>
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  );
}

function AccordionContent({ className, children, ...props }) {
  return (
    <AccordionPrimitive.Content
      data-slot="accordion-content"
      className="overflow-hidden text-base transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down"
      {...props}
    >
      <div
        className={cn("bg-[#eeeeee] p-[30px] pl-[195px] text-black", className)}
      >
        {children}
      </div>
    </AccordionPrimitive.Content>
  );
}

function AccordionBulletItem({ children, className, ...props }) {
  return (
    <div className={cn("flex items-start py-1", className)} {...props}>
      <span className="mr-2 text-base">•</span>
      <div className="text-base text-gray-700">{children}</div>
    </div>
  );
}

export {
  FAQAccordion,
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
  AccordionBulletItem,
};
