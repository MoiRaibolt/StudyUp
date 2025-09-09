import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TaskProvider } from "./context/TaskContext";

import Login from "./pages/Login";
import Home from "./pages/Home";
import Agenda from "./pages/Agenda";
import Cadastro from "./pages/Cadastro";
import Metas from "./pages/Metas";
import DefinirMeta from "./pages/DefinirMeta";
import Lixeira from "./pages/Lixeira";
import Ajuda from "./pages/Ajuda";
import Configuracoes from "./pages/Configuracoes";
import Register from "./pages/Register";

// Tutoriais
import Tutorial from "./components/Tutorial";        // versão em tela cheia
import TutorialBaloes from "./components/TutorialBaloes"; // versão com balões na navbar

export default function App() {
  return (
    <TaskProvider>
      <BrowserRouter>
        {/* 🔥 O tutorial vai acompanhar todas as rotas */}
        <TutorialBaloes />
        {/* Se preferir usar a versão em tela cheia, troque acima para <Tutorial /> */}

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/agenda" element={<Agenda />} />
          <Route path="/cadastro" element={<Cadastro />} />
          <Route path="/metas" element={<Metas />} />
          <Route path="/definir-meta" element={<DefinirMeta />} />
          <Route path="/lixeira" element={<Lixeira />} />
          <Route path="/ajuda" element={<Ajuda />} />
          <Route path="/configuracoes" element={<Configuracoes />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </TaskProvider>
  );
}
