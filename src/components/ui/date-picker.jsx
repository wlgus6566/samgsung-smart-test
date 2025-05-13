"use client";

import { format } from "date-fns";
import { ko } from "date-fns/locale";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { cn } from "@/lib/utils";
import { FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";

function DatePicker({ field, placeholder, className, mode = "single" }) {
  return (
    <>
      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                // 기본 스타일
                "w-[240px] pl-3 text-left font-normal",
                !field.value && "text-muted-foreground",

                // 포커스 스타일
                "focus-visible:border-primary",
                "data-[state=open]:border-primary",

                className
              )}
            >
              {field.value ? (
                mode === "range" ? (
                  field.value.from ? (
                    field.value.to ? (
                      <>
                        {format(field.value.from, "yyyy.MM.dd", { locale: ko })}{" "}
                        - {format(field.value.to, "yyyy.MM.dd", { locale: ko })}
                      </>
                    ) : (
                      format(field.value.from, "yyyy.MM.dd", { locale: ko })
                    )
                  ) : (
                    <span>{placeholder}</span>
                  )
                ) : (
                  format(field.value, "yyyy.MM.dd", { locale: ko })
                )
              ) : (
                <span>{placeholder}</span>
              )}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode={mode}
            selected={field.value}
            onSelect={field.onChange}
            disabled={(date) =>
              date > new Date() || date < new Date("1900-01-01")
            }
            initialFocus
            locale={ko}
            formatters={{
              formatCaption: (date, options) =>
                format(date, "yyyy년 M월", { locale: ko }),
            }}
          />
        </PopoverContent>
      </Popover>
    </>
  );
}

export { DatePicker };
