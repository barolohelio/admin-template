import route from "next/router";
import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";
import firebase from "../../firebase/config";
import Usuario from "../../model/Usuario";

interface AuthContextProps {
  usuario?: Usuario;
  carregando?: boolean
  loginGoogle?: () => Promise<void>;
  login?: (email:string, senha: string) => Promise<void>;
  cadastrar?: (email:string, senha: string) => Promise<void>;
  logout?: () => Promise<void>
}

async function usuarioNormalizado(
  usuarioFirebase: firebase.User
): Promise<Usuario> {
  const token = await usuarioFirebase.getIdToken();
  return {
    uid: usuarioFirebase.uid,
    nome: usuarioFirebase.displayName,
    email: usuarioFirebase.email,
    token,
    provedor: usuarioFirebase.providerData[0].providerId,
    imagemUrl: usuarioFirebase.photoURL,
  };
}

function gerenciarCookie(logado: boolean) {
  if (logado) {
    console.log();
    Cookies.set("admin-template-auth", logado, {
      expires: 7,
    });
  } else {
    Cookies.remove("admin-template-auth");
  }
}


const AuthContext = createContext<AuthContextProps>({});

export function AuthProvider(props) {
  const [carregando, setCarregando] = useState(true);
  const [usuario, setUsuario] = useState<Usuario>();

  async function configurarSessao(usuarioFirebase) {
    if (usuarioFirebase?.email) {
      const usuario = await usuarioNormalizado(usuarioFirebase);
      setUsuario(usuario);
      gerenciarCookie(true);
      setCarregando(false);
      return usuario.email;
    } else {
      setUsuario(null);
      gerenciarCookie(false);
      setCarregando(false);
      return false;
    }
  }

  async function login(email, senha) {
    try {
      setCarregando(true)
      const resp = await firebase
        .auth()
        .signInWithEmailAndPassword(email, senha)

        await configurarSessao(resp.user);
        route.push("/");
    } finally {
      setCarregando(false)
    }
  }

  async function cadastrar(email, senha) {
    try {
      setCarregando(true)
      const resp = await firebase
        .auth()
        .createUserWithEmailAndPassword(email, senha)

        await configurarSessao(resp.user);
        route.push("/");
    } finally {
      setCarregando(false)
    }
  }

  async function loginGoogle() {
    //Se o código for executado de forma correta é feito o login com Google
    //Caso apresente algum erro é chamado a função setCarregando(false) para não manter 
    //com valor true definido na linha 63, ajudando a garantir que ele será sempre com valor false por causa do finally
    try {
      setCarregando(true)
      const resp = await firebase
        .auth()
        .signInWithPopup(new firebase.auth.GoogleAuthProvider());

        await configurarSessao(resp.user);
        route.push("/");
    } finally {
      setCarregando(false)
    }
  }

  async function logout() {
    try {
      setCarregando(true);
      await firebase.auth().signOut();
      await configurarSessao(null);
    } finally {
      setCarregando(false);
    }
  }

  useEffect(() => {
    /*
    .onIdTokenChanged é observador do firebase, assim que o IdToken Mudar 
    ele vai chamar a função configurarSessao()
    */
    if(Cookies.get('admin-template-auth')){
      const cancelar = firebase.auth().onIdTokenChanged(configurarSessao);
      return () => cancelar();
    } else {
      setCarregando(false)
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        usuario,
        login,
        cadastrar,
        loginGoogle,
        logout, 
        carregando,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
