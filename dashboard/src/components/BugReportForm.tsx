import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup.object().shape({
  title: yup.string().required("Título é obrigatório").min(3, "Mínimo de 3 caracteres"),
  description: yup.string().required("Descrição é obrigatória").min(10, "Mínimo de 10 caracteres"),
  type: yup.string().oneOf(["bug", "suggestion"], "Tipo inválido").required("Tipo é obrigatório"),
});

export default function BugReportForm({ closeModal }: { closeModal: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: { title: string; description: string; type: string }) => {
    const response = await fetch("/api/send", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });

    if (!response.ok) {
        alert("Erro ao enviar o formulário.");
        return;
    }
    
    alert("Formulário enviado com sucesso!");
    closeModal();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mx-auto p-4 border border-[var(--zinc)] rounded shadow-md">
        <h2 className="text-xl font-semibold mb-4 p-3">
            Relatar Bug ou Sugestão
        </h2>

        <div className="mb-4">
            <label className="block font-medium">Título</label>
        <input
          {...register("title")}
          className={`w-full px-3 py-2 border text-sm font-medium rounded focus:outline-none ${
            errors.title ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Título do relatório"
        />
        {errors.title && <p className="text-red-500 text-xs mt-1">{errors.title.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Descrição</label>
        <textarea
          {...register("description")}
          className={`w-96 px-3 py-2 border text-sm rounded focus:outline-none ${
            errors.description ? "border-red-500" : "border-gray-300"
          }`}
          placeholder="Detalhe o bug ou sugestão"
          rows={5}
        ></textarea>
        {errors.description && <p className="text-red-500 text-xs mt-1">{errors.description.message}</p>}
      </div>

      <div className="mb-4">
        <label className="block font-medium">Tipo</label>
        <select
          {...register("type")}
          className={`w-full px-3 py-2 border text-sm rounded focus:outline-none ${
            errors.type ? "border-red-500" : "border-gray-300"
          }`}
        >
          <option value="">Selecione o tipo</option>
          <option value="bug">Bug</option>
          <option value="suggestion">Sugestão</option>
        </select>
        {errors.type && <p className="text-red-500 text-xs mt-1">{errors.type.message}</p>}
      </div>

      <button
        type="submit"
        className="w-full bg-[var(--primary-color)] text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar"}
      </button>
    </form>
  );
};
