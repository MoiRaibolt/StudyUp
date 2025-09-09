import { useEffect, useState } from "react";

export default function Tutorial() {
  const [step, setStep] = useState(0);
  const [show, setShow] = useState(false);

  const steps = [
    { text: "🏠 Aqui você vê as tarefas de HOJE!", position: "top" },
    { text: "📅 Na Agenda ficam TODAS as suas atividades.", position: "top" },
    { text: "✍️ Use Cadastro para adicionar novas tarefas.", position: "top" },
    { text: "🎯 Acompanhe seu progresso em Metas.", position: "top" },
    { text: "🗑️ A Lixeira guarda o que você excluiu.", position: "top" },
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

  if (!show) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded shadow-lg max-w-sm text-center">
        <p className="mb-4 text-lg">{steps[step].text}</p>
        <button
          onClick={nextStep}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {step < steps.length - 1 ? "Próximo ➡️" : "Finalizar 🎉"}
        </button>
      </div>
    </div>
  );
}
