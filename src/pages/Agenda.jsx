import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";

export default function Agenda() {
  const { tasks, removeTask, toggleTask } = useTasks();

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        Agenda
      </header>

      <main className="flex-1 p-4">
        <h2 className="text-lg font-semibold mb-3">📅 Todas as Atividades</h2>

        {tasks.length === 0 ? (
          <p className="text-gray-500">Nenhuma atividade cadastrada.</p>
        ) : (
          <ul className="space-y-2">
            {tasks.map((t, i) => (
              <li
                key={i}
                className={`p-3 bg-white rounded shadow flex justify-between items-center ${
                  t.done ? "line-through text-gray-500" : ""
                }`}
              >
                <div>
                  <strong>{t.title}</strong>
                  <div>
                    {t.date && <span>📅 {t.date}</span>}{" "}
                    {t.time && <span>⏰ {t.time}</span>}
                  </div>
                </div>
                <div className="flex space-x-3">
                  <button
                    onClick={() => toggleTask(i)}
                    className="text-green-500 hover:text-green-700"
                  >
                    ✔️
                  </button>
                  <button
                    onClick={() => removeTask(i)}
                    className="text-red-500 hover:text-red-700"
                  >
                    🗑️
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </main>

      <Navbar />
    </div>
  );
}
