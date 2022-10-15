import { Cabecalho } from "./Cabecalho";
import { Conteudo } from "./Conteudo";
import { MenuLateral } from "./MenuLateral";

interface LayoutProps {
  titulo: string;
  subtitulo: string;
  children?: any;
}

export function Layout(props: LayoutProps) {
  return (
    <div className="dark flex h-screen w-screen">
      <MenuLateral />
      <div className="flex flex-col w-full p-7 bg-gray-300 dark:bg-gray-800">
        <Cabecalho subtitulo={props.subtitulo} titulo={props.titulo}/>
        <Conteudo>
          {props.children}
        </Conteudo>
      </div>
    </div>
  );
}