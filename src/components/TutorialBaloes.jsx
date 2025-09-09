import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function TutorialBaloes() {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);
  const location = useLocation();

  // Lista dos balões (um para cada rota)
  const steps = [
    { path: "/home", text: "🏠 Aqui você vê apenas as tarefas de HOJE!" },
    { path: "/agenda", text: "📅 Aqui estão TODAS as suas atividades." },
    { path: "/cadastro", text: "✍️ Use Cadastro para adicionar novas tarefas." },
    { path: "/metas", text: "🎯 Acompanhe seu progresso de estudos." },
    { path: "/lixeira", text: "🗑️ Veja e restaure o que foi excluído." },
    { path: "/ajuda", text: "📘 Aqui tem o guia de uso e sobre o criador." },
  ];

  useEffect(() => {
    const alreadyVisited = localStorage.getItem("tutorialDone");
    if (!alreadyVisited) {
      setShow(true);
    }
  }, []);

  const nextStep = () => {
    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      setShow(false);
      localStorage.setItem("tutorialDone", "true");
    }
  };

  // Exibir apenas se for o passo atual e na rota correta
  if (!show || location.pathname !== steps[step].path) return null;

  return (
    <div className="fixed bottom-16 left-0 right-0 flex justify-center z-50">
      <div className="bg-white shadow-lg rounded-lg p-3 border border-gray-300 max-w-xs text-center">
        <p className="mb-2">{steps[step].text}</p>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
        >
          {step < steps.length - 1 ? "Próximo ➡️" : "Finalizar 🎉"}
        </button>
      </div>
    </div>
  );
}
