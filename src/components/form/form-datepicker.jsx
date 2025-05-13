"use client";

import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
} from "@/components/ui/form";
import { DatePicker } from "@/components/ui/date-picker";
import { cn } from "@/lib/utils";

const FormDatepicker = ({
  control,
  name,
  label,
  description = "",
  placeholder,
  className,
  labelClassName,
  mode = "single",
  descriptionClassName,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className="flex flex-col">
          {label && (
            <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          )}
          <DatePicker
            field={field}
            className={className}
            placeholder={placeholder}
            mode={mode}
          />
          {description && (
            <FormDescription className={cn(descriptionClassName)}>
              {description}
            </FormDescription>
          )}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default FormDatepicker;
