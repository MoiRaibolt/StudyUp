import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

export default function Metas() {
  const { tasks, goal, setGoal } = useTasks();

  const total = tasks.length;
  const concluidas = tasks.filter((t) => t.done).length;
  const progresso = goal > 0 ? Math.round((concluidas / goal) * 100) : 0;

  const data = [
    { name: "Concluídas", value: concluidas },
    { name: "Meta Restante", value: Math.max(goal - concluidas, 0) },
  ];

  const COLORS = ["#3B82F6", "#E5E7EB"];

  const resetGoal = () => {
    if (window.confirm("Tem certeza que deseja resetar a meta?")) {
      setGoal(0);
      localStorage.removeItem("goal");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        Metas Semanais
      </header>

      <main className="flex-1 p-4 space-y-6">
        <h2 className="text-lg font-semibold mb-3">🎯 Progresso</h2>

        <div className="bg-white p-4 rounded shadow">
          {goal > 0 ? (
            <>
              <p>
                Concluídas:{" "}
                <span className="font-bold">
                  {concluidas}/{goal}
                </span>
              </p>
              <progress value={progresso} max="100" className="w-full h-4 mt-2"></progress>
              <p className="text-sm text-gray-500 mt-1">{progresso}% concluído</p>
              <button
                onClick={resetGoal}
                className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
              >
                ❌ Resetar Meta
              </button>
            </>
          ) : (
            <p className="text-gray-500">Nenhuma meta definida.</p>
          )}
        </div>

        {goal > 0 && (
          <div className="bg-white p-4 rounded shadow h-64">
            <h3 className="font-semibold mb-3">Distribuição</h3>
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  dataKey="value"
                  label={({ name, value }) => `${name}: ${value}`}
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        )}
      </main>

      <Navbar />
    </div>
  );
}
