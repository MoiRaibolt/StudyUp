import { useState } from "react";
import { useTasks } from "../context/TaskContext";
import Navbar from "../components/Navbar";

export default function Cadastro() {
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title) return;

    addTask({ title, date, time });
    setTitle("");
    setDate("");
    setTime("");
    alert("Atividade cadastrada!");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        Cadastrar Atividade
      </header>

      <main className="flex-1 p-4">
        <form
          onSubmit={handleSubmit}
          className="space-y-4 max-w-md mx-auto bg-white p-6 rounded shadow"
        >
          <input
            type="text"
            placeholder="Nome da Atividade"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            className="w-full border rounded p-2"
          />
          <input
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            className="w-full border rounded p-2"
          />
          <button
            type="submit"
            className="w-full bg-blue-500 text-white py-2 rounded"
          >
            Salvar Atividade
          </button>
        </form>
      </main>

      <Navbar />
    </div>
  );
}
