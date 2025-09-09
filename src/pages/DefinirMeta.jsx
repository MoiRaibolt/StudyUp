import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import Navbar from "../components/Navbar";

export default function DefinirMeta() {
  const { goal, setGoal } = useTasks();
  const [value, setValue] = useState(goal || "");

  const handleSubmit = (e) => {
    e.preventDefault();
    setGoal(Number(value));
    alert("Meta definida com sucesso!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        Definir Meta
      </header>

      <main className="flex-1 p-4">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto bg-white p-6 rounded shadow"
        >
          <label className="block font-semibold">Meta semanal (número de tarefas)</label>
          <input
            type="number"
            min="1"
            placeholder="Ex: 10"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="w-full border rounded p-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Salvar Meta
          </button>
        </form>
      </main>

      <Navbar />
    </div>
  );
}
