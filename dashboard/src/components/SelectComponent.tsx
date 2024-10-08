import * as React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

interface SelectComponentProps {
    value: string;
    onChange: (value: string) => void;
    placeholder: string;
    options: { value: string; label: string }[];
}

export function SelectComponent({ value, onChange, options, placeholder }: SelectComponentProps) {
  return (
    <Select onValueChange={onChange} value={value}>
      <SelectTrigger className="w-[180px] border-[var(--zinc)]">
        <SelectValue placeholder="Select tag" />
      </SelectTrigger>
      <SelectContent className="bg-card text-white selection:border-white">
        <SelectGroup >
            <SelectLabel>{placeholder}</SelectLabel>
                {options.map((option) => (
                    <SelectItem key={option.value} className="hover:bg-[var(--veu)]" value={option.value}>
                        {option.label}
                    </SelectItem>
                ))}
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
