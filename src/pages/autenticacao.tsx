/* eslint-disable @next/next/no-img-element */
import { useState } from "react";
import { AuthInput } from "../auth/Authinput";
import { AlertaIcone } from "../components/icons";

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
      <div className="w-1/2 hidden md:block md:1/2 lg:w-2/3">
        <img
          src="https://source.unsplash.com/random"
          alt="Imagem da Tela de Autenticação"
          className="h-screen w-full object-cover"
        />
      </div>
      <div className="w-full md:w-1/2 m-10 lg:1/3">
        <h1
          className="
          text-3xl font-bold mb-5
        "
        >
          {modo === "login"
            ? "Entre com a Sua Conta"
            : "Cadastre-se na Plataforma"}
        </h1>

        <div className="
          bg-red-400 text-white"
        >
          {AlertaIcone}
          <span>Ocorreu um erro fatal</span>
        </div>

        <AuthInput
          label="Email"
          valor={email}
          valorMudou={setEmail}
          tipo="email"
          obrigatorio
          className=""
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

        {modo === "login" ? (
          <p className="mt-8">
            Novo por aqui?
            <a
              onClick={() => setModo("cadastro")}
              className="
                text-blue-500 hover:text-blue-700 
                cursor-pointer font-semibold"
            > Crie uma conta gratuita?</a>
          </p>
        ) : (
          <p className="mt-8">
            já faz parte da nossa comunidade?
            <a
              onClick={() => setModo("login")}
              className="
              text-blue-500 hover:text-blue-700 
              cursor-pointer font-semibold"
            > Entre com a suas Credenciais</a>
          </p>
        )}
      </div>
    </div>
  );
}
