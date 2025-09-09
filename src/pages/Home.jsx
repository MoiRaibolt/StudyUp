import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";

export default function Home() {
  const { tasks, removeTask, toggleTask } = useTasks();

  // Data de hoje no formato YYYY-MM-DD
  const today = new Date().toISOString().split("T")[0];
  const todayTasks = tasks.filter((t) => t.date === today);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        StudyUp - Home
      </header>

      <main className="flex-1 p-4">
        <h2 className="text-lg font-semibold mb-3">Tarefas de Hoje</h2>

        {todayTasks.length === 0 ? (
          <p className="text-gray-500">Nenhuma atividade para hoje.</p>
        ) : (
          <ul className="space-y-2">
            {todayTasks.map((t, i) => (
              <li
                key={i}
                className={`p-3 bg-white rounded shadow flex justify-between items-center ${
                  t.done ? "line-through text-gray-500" : ""
                }`}
              >
                <span>
                  {t.title} {t.time && `- ${t.time}`}
                </span>
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
