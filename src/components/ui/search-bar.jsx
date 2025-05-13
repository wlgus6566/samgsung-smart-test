import { UiSelect } from "@/components/ui/ui-select";
import { cn } from "@/lib/utils";
import { Input } from "@/components/ui/input";
export default function SearchBar({
  className = "",
  selected,
  setSelected,
  options,
  input,
  setInput,
  onSearch,
  placeholder,
}) {
  // Enter 키 이벤트 핸들러 추가
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div
      className={cn(
        "min-w-[558px] h-[44px] flex items-center gap-[14px] border border-[#eee] rounded-full bg-white",
        className
      )}
    >
      <UiSelect
        options={options}
        value={selected}
        onChange={setSelected}
        className="w-[177px] h-[42px] pr-[20px] focus:ring-0 border-none focus:ring-offset-0 focus-visible:ring-0 relative before:absolute before:top-[50%] before:right-0 before:translate-y-[-50%] before:w-[1px] before:h-[18px] before:bg-[#eee] before:z-10"
      />
      <Input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder={placeholder}
        onKeyDown={handleKeyDown}
        onSearch={onSearch}
        type="search"
        className="p-0 border-0 bg-transparent search-input"
      />
    </div>
  );
}
