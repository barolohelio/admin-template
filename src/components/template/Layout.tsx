import clsx from "clsx";
//import { ForcarAutenticacao } from "../../auth/ForcarAutenticacao";
import { useAppData } from "../../data/hook/useAppData";
import { forcarAutenticacao } from "../../functions/ForcarAutenticacao";
import { Cabecalho } from "./Cabecalho";
import { Conteudo } from "./Conteudo";
import { MenuLateral } from "./MenuLateral";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export function Layout(props: LayoutProps) {
  const { tema } = useAppData();

  return forcarAutenticacao(
    //Caso precise usar componente
    //<ForcarAutenticacao> 
      <div className={clsx("flex h-screen w-screen", tema)}>
        <MenuLateral />
        <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
          <Cabecalho subtitulo={props.subtitulo} titulo={props.titulo} />
          <Conteudo>{props.children}</Conteudo>
        </div>
      </div>
   // </ForcarAutenticacao>
  );
}
