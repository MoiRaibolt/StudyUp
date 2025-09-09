import Navbar from "../components/Navbar";
import { useTasks } from "../context/TaskContext";

export default function Configuracoes() {
  const { language, setLanguage, theme, setTheme } = useTasks();

  return (
    <div className={`min-h-screen ${theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-50 text-black"} flex flex-col pb-16`}>
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        ⚙️ Configurações
      </header>

      <main className="flex-1 p-6 space-y-6">
        {/* Idioma */}
        <section className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🌐 Idioma / Language</h2>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="p-2 border rounded text-black"
          >
            <option value="pt">🇧🇷 Português</option>
            <option value="en">🇺🇸 English</option>
          </select>
        </section>

        {/* Tema */}
        <section className="bg-white dark:bg-gray-800 p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">🎨 Tema</h2>
          <div className="flex space-x-4">
            <button
              onClick={() => setTheme("light")}
              className={`px-4 py-2 rounded ${theme === "light" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              🌞 Claro
            </button>
            <button
              onClick={() => setTheme("dark")}
              className={`px-4 py-2 rounded ${theme === "dark" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
            >
              🌙 Escuro
            </button>
          </div>
        </section>
      </main>

      <Navbar />
    </div>
  );
}
