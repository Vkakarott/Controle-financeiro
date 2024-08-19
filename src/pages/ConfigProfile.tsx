"use client"

import { SetStateAction, useState } from "react";
import TitleEdit from '@/components/TitleEdit';
import Avatar from '@/components/Avatar';
import Input from '@/components/Input';

export default function ConfigProfile({session}) {
  console.log(session);
  const [name, setName] = useState(session.user.name);
  const [profession, setProfession] = useState(session.user.profession);
  const [fixedIncome, setFixedIncome] = useState(session.user.fixedIncome);

  const handleNameChange = (newName: SetStateAction<string>) => {
    setName(newName);
  }

  const handleProfessionChange = (newProfession: SetStateAction<string>) => {
    setProfession(newProfession);
  }

  const handleFixedIncomeChange = (newFixedIncome: SetStateAction<string>) => {
    setFixedIncome(newFixedIncome);
  }

  const handleSubmit = async (event: { preventDefault: () => void; }) => {
    event.preventDefault();

    try {
      const response = await fetch('/api/user', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${session.accessToken}`
        },
        body: JSON.stringify({
          field: 'name',
          value: name,
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to update user');
      }

    } catch (error) {
      console.error('Error updating user:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex rounded-3xl border border-[var(--zinc)] shadow-md flex-col items-center justify-center p-7 bg-[var(--background1)]">
      <div className="flex gap-10 w-full justify-between items-center">
        <TitleEdit initialValue={name} onChange={handleNameChange}/>
        <Avatar src={undefined}/>
      </div>
      <div className="flex flex-col gap-2 w-full mt-4">
        <Input
          placeholder="Profession"
          value={profession}
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => setProfession(event.target.value)}
        />
        <Input
          placeholder="Salary"
          value={fixedIncome}
          onChange={(event: { target: { value: SetStateAction<string>; }; }) => setFixedIncome(event.target.value)}
          className="w-36"
        />
      </div>
      <div className="flex w-full mt-4 justify-end">
        <button type="submit" className="px-4 py-2 bg-[var(--primary-color)] text-white rounded-lg">Salvar</button>
      </div>
    </form>
  );
}