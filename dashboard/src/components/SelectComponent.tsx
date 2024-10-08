import * as React from "react";
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from "@/components/ui/select";

export function SelectComponent() {
  return (
    <Select>
      <SelectTrigger className="w-[180px] border-[var(--zinc)]">
        <SelectValue placeholder="Select tag" />
      </SelectTrigger>
      <SelectContent className="bg-card text-white selection:border-white">
        <SelectGroup >
            <SelectLabel>Tags</SelectLabel>
            <SelectItem className="hover:bg-[var(--veu)]" value="eletronics">Eletronics</SelectItem>
            <SelectItem className="hover:bg-[var(--veu)]" value="drinks">Drinks</SelectItem>
            <SelectItem className="hover:bg-[var(--veu)]" value="food">Food</SelectItem>
            <SelectItem className="hover:bg-[var(--veu)]" value="clothes">Clothes</SelectItem>
            <SelectItem className="hover:bg-[var(--veu)]" value="leisure">Leisure</SelectItem>
            <SelectItem className="hover:bg-[var(--veu)]" value="others">Others</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  )
}
