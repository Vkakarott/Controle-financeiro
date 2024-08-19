"use client"

import { SetStateAction, useState } from "react";
import TitleEdit from '@/components/TitleEdit';
import Avatar from '@/components/Avatar';
import Input from '@/components/Input';

export default function ConfigProfile() {
  const [value, setValue] = useState("");

  const handleValueChange = (newValue: SetStateAction<string>) => {
    setValue(newValue);
  };

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-3xl border border-[var(--zinc)] shadow-md flex-col items-center justify-center p-7 bg-[var(--background1)]">
      <div className="flex gap-10 w-full justify-between items-center">
        <TitleEdit initialValue={value} onChange={handleValueChange}/>
        <Avatar src={undefined}/>
      </div>
      <div className="flex flex-col gap-2 w-full mt-4">
        <Input
          placeholder="Profissão"
          value={value}
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => setValue(event.target.value)}
        />
        <Input
          placeholder="Renda Fixa"
          value={value}
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => setValue(event.target.value)}
          className="w-36"
        />
      </div>
      <div className="flex w-full mt-4 justify-end">
        <button type="submit" className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg">Salvar</button>
      </div>
    </form>
  );
}