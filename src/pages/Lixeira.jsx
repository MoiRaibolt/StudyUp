import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";

export default function Lixeira() {
  const { deletedTasks, restoreTask, deleteForever, clearTrash } = useTasks();

  const handleClear = () => {
    if (window.confirm("Tem certeza que deseja esvaziar a lixeira?")) {
      clearTrash();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <header className="p-4 bg-red-600 text-white text-center text-xl font-bold">
        🗑️ Lixeira
      </header>

      <main className="flex-1 p-4">
        {deletedTasks.length === 0 ? (
          <p className="text-gray-500">Nenhuma tarefa excluída.</p>
        ) : (
          <>
            <div className="flex justify-end mb-3">
              <button
                onClick={handleClear}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                ❌ Esvaziar Lixeira
              </button>
            </div>

            <ul className="space-y-2">
              {deletedTasks.map((t, i) => (
                <li
                  key={i}
                  className="p-3 bg-white rounded shadow flex justify-between items-center"
                >
                  <span>
                    {t.title} {t.date && `- ${t.date}`} {t.time && `- ${t.time}`}
                  </span>
                  <div className="flex space-x-3">
                    <button
                      onClick={() => restoreTask(i)}
                      className="text-green-500 hover:text-green-700"
                    >
                      ♻️ Restaurar
                    </button>
                    <button
                      onClick={() => deleteForever(i)}
                      className="text-red-500 hover:text-red-700"
                    >
                      ❌ Apagar
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          </>
        )}
      </main>

      <Navbar />
    </div>
  );
}
