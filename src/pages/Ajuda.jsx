import Navbar from "../components/Navbar";

export default function Ajuda() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col pb-16">
      <header className="p-4 bg-blue-600 text-white text-center text-xl font-bold">
        📘 Como Usar o StudyUp
      </header>

      <main className="flex-1 p-6 space-y-6">
        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">1️⃣ Cadastro de Tarefas</h2>
          <p>
            Vá até <strong>✍️ Cadastro</strong> para adicionar suas atividades.  
            Defina um título, data e horário para melhor organização.
          </p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">2️⃣ Home</h2>
          <p>
            Na tela <strong>🏠 Home</strong> você vê apenas as atividades de <strong>hoje</strong>.  
            É possível marcar como concluídas (✔️) ou excluir (🗑️).
          </p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">3️⃣ Agenda</h2>
          <p>
            Em <strong>📅 Agenda</strong> você encontra todas as atividades cadastradas,  
            organizadas com suas datas e horários.
          </p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">4️⃣ Metas</h2>
          <p>
            Em <strong>🎯 Metas</strong> você acompanha seu progresso semanal.  
            Defina quantas atividades deseja concluir em <strong>⚙️ Definir Meta</strong>.
          </p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">5️⃣ Lixeira</h2>
          <p>
            Se excluir algo sem querer, não se preocupe!  
            Vá até a <strong>🗑️ Lixeira</strong> e restaure ou apague definitivamente.
          </p>
        </section>

        <section className="bg-white p-4 rounded shadow">
          <h2 className="text-lg font-semibold mb-2">👨‍💻 Sobre o Criador</h2>
          <p>
            O <strong>StudyUp</strong> foi desenvolvido por <strong>Moisés Raibolt</strong>,  
            estudante de <strong>Análise e Desenvolvimento de Sistemas</strong>.  
            Este projeto nasceu como parte de um trabalho acadêmico e evoluiu para se  
            tornar uma ferramenta de organização para estudantes que buscam melhorar sua rotina de estudos.
          </p>
          <p className="mt-2 text-sm text-gray-500">
            📩 Contato: moisesraibolt@gmail.com  
            🔗 LinkedIn: www.linkedin.com/in/moisesraibolt
            🐙 GitHub: https://github.com/MoiRaibolt
          </p>
        </section>
      </main>

      <Navbar />
    </div>
  );
}
