"use client"

import { useState } from "react";
import TitleEdit from '@/components/TitleEdit';

export default function ConfigProfile() {
  const handleValueChange = (newValue) => {
    console.log("Novo valor:", newValue);
    // Aqui você pode atualizar o estado ou realizar outras ações
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

  return (
    <div className="flex rounded-3xl border border-[var(--zinc)] shadow-md flex-col items-center justify-center p-7 bg-[var(--background1)]">
      <div className="flex">
        <TitleEdit initialValue="Meu Valor Inicial" onChange={handleValueChange}/>
        
      </div>
    </div>
  );
}