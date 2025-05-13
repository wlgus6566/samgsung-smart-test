"use client";
import {
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
  FormMessage,
  FormControl,
} from "@/components/ui/form";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";

const FormRadio = ({
  control,
  name,
  label,
  description = "",
  items = [],
  className,
  labelClassName,
  descriptionClassName,
}) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {label && (
            <FormLabel className={cn(labelClassName)}>{label}</FormLabel>
          )}
          <FormControl>
            <RadioGroup
              onValueChange={field.onChange}
              defaultValue={field.value}
              className={cn("flex flex-col", className)}
            >
              {items.map((item) => (
                <FormItem
                  key={item.value}
                  className="flex items-center space-x-0 space-y-0"
                >
                  <div className="flex items-center h-5">
                    <FormControl>
                      <RadioGroupItem value={item.value} />
                    </FormControl>
                  </div>
                  <FormLabel className="text-sm font-normal">
                    {item.label}
                  </FormLabel>
                </FormItem>
              ))}
            </RadioGroup>
          </FormControl>
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

export default FormRadio;
