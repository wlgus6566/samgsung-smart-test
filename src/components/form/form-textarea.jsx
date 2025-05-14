import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export function FormTextarea({
  label,
  placeholder = "",
  value = "",
  onChange,
  disabled = false,
  error,
  maxLength = 100,
}) {
  return (
    <div className="space-y-1">
      {label && (
        <Label className="text-sm font-medium">
          {label}
          <span className="text-red-500 ml-1">*</span>
        </Label>
      )}
      <div>
        <Textarea
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          maxLength={maxLength}
          className={cn(
            "resize-none w-full min-h-[100px] text-sm px-4 py-3",
            disabled && "bg-muted cursor-not-allowed",
            error ? "border-red-500 focus-visible:ring-red-500" : ""
          )}
        />
        <div className="text-right text-xs text-muted-foreground mt-1">
          {value.length}/{maxLength}
        </div>
        {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
      </div>
    </div>
  );
}
