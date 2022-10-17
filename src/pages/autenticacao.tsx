import Image from "next/image";
import { useState } from "react";
import { AuthInput } from "../auth/Authinput";

export default function Autenticacao() {
  const [modo, setModo] = useState<"login" | "cadastro">("login");

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  function submeter() {
    if (modo === "login") {
      console.log("login");
    } else {
      console.log("Cadastrar");
    }
  }

  return (
    <div className="flex  h-screen items-center justify-center">
      <div>
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticação"
        />
      </div>
      <div className="w-1/2">
        <h1
          className="
          text-xl font-bold mb-5
        "
        >
          {modo === "login"
            ? "Entre com a Sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>
        <AuthInput
          label="Email"
          valor={email}
          valorMudou={setEmail}
          tipo="email"
          obrigatorio
        />
        <AuthInput
          label="Senha"
          valor={senha}
          valorMudou={setSenha}
          tipo="password"
          obrigatorio
        />
        <button
          onClick={submeter}
          className="
          w-full bg-indigo-500 hover:bg-indigo-400 text-white rounded-lg
          px-4 py-3 mt-6
        "
        >
          {modo === "login" ? "Entrar" : "Cadastrar"}
        </button>
        <hr className="my-6 border-gray-300 w-full" />
        <button
          onClick={submeter}
          className="
          w-full bg-red-500 hover:bg-red-400 text-white rounded-lg
          px-4 py-3
        "
        >
          Entrar com Google
        </button>
      </div>
    </div>
  );
}
