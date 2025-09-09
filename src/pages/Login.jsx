import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const user = JSON.parse(localStorage.getItem("user"));
    if (user && user.email === email && user.password === password) {
      navigate("/home");
    } else {
      alert("Credenciais inválidas!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-blue-50">
      <h1 className="text-4xl font-bold text-blue-600 mb-6">StudyUp</h1>

      <form
        onSubmit={handleLogin}
        className="space-y-4 bg-white p-6 rounded shadow w-72"
      >
        <input
          type="email"
          placeholder="E-mail"
          className="border rounded p-2 w-full"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          className="border rounded p-2 w-full"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded"
        >
          Entrar
        </button>
      </form>

      <p className="mt-4">
        Não tem conta?{" "}
        <Link to="/register" className="text-blue-600">
          Cadastre-se
        </Link>
      </p>
    </div>
  );
}
