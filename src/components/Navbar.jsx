import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t flex justify-around py-3 text-sm">
      <Link to="/home" className="text-blue-600">🏠 Home</Link>
      <Link to="/agenda" className="text-gray-600">📅 Agenda</Link>
      <Link to="/cadastro" className="text-gray-600">✍️ Cadastro</Link>
      <Link to="/metas" className="text-gray-600">🎯 Metas</Link>
      <Link to="/definir-meta" className="text-gray-600">⚙️ Meta</Link>
      <Link to="/lixeira" className="text-red-500">🗑️ Lixeira</Link>
      <Link to="/ajuda" className="text-gray-600">📘 Ajuda</Link>
      <Link to="/configuracoes" className="text-gray-600">⚙️ Config</Link>
    </div>
  );
}
