import { createContext, useContext, useState, useEffect } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }) {
  const [tasks, setTasks] = useState([]);
  const [goal, setGoal] = useState(0);
  const [deletedTasks, setDeletedTasks] = useState([]);
  const [language, setLanguage] = useState("pt");
  const [theme, setTheme] = useState("light");

  // 👉 Adicionar uma tarefa
  const addTask = (task) => {
    setTasks((prev) => [...prev, { ...task, done: false }]);
  };

  // 👉 Remover (manda para a lixeira)
  const removeTask = (index) => {
    const taskToRemove = tasks[index];
    setDeletedTasks((prev) => [...prev, taskToRemove]);
    setTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // 👉 Concluir / desmarcar tarefa
  const toggleTask = (index) => {
    setTasks((prev) =>
      prev.map((task, i) =>
        i === index ? { ...task, done: !task.done } : task
      )
    );
  };

  // 👉 Restaurar da lixeira
  const restoreTask = (index) => {
    const taskToRestore = deletedTasks[index];
    setTasks((prev) => [...prev, taskToRestore]);
    setDeletedTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // 👉 Apagar definitivamente da lixeira
  const deleteForever = (index) => {
    setDeletedTasks((prev) => prev.filter((_, i) => i !== index));
  };

  // 👉 Esvaziar toda a lixeira
  const clearTrash = () => {
    setDeletedTasks([]);
  };

  // Carregar preferências
  useEffect(() => {
    const storedLang = localStorage.getItem("language");
    const storedTheme = localStorage.getItem("theme");
    if (storedLang) setLanguage(storedLang);
    if (storedTheme) setTheme(storedTheme);
  }, []);

  // Salvar idioma
  useEffect(() => {
    localStorage.setItem("language", language);
  }, [language]);

  // Salvar tema
  useEffect(() => {
    localStorage.setItem("theme", theme);
    document.documentElement.className = theme === "dark" ? "dark" : "";
  }, [theme]);

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        goal,
        setGoal,
        deletedTasks,
        setDeletedTasks,
        language,
        setLanguage,
        theme,
        setTheme,
        addTask,
        removeTask,
        toggleTask,
        restoreTask,   // 👈 agora disponível
        deleteForever, // 👈 agora disponível
        clearTrash,    // 👈 agora disponível
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasks = () => useContext(TaskContext);
