import clsx from "clsx";
import Link from "next/link";

interface MenuItemProps {
  url?: string;
  onClick?: (evento: any) => void
  text: string;
  icone: any;
  className?: string;
}

export function MenuItem(props: MenuItemProps) {
  function renderizarConteudo() {
    return (
    <a className={clsx("flex flex-col justify-center items-center h-16 w-20 text-gray-600 dark:text-gray-400", 
      props.className)}>
      {props.icone}
      <span className="text-xs font-light ">{props.text}</span>
    </a>
    )
  }

  return (
    <li onClick={props.onClick} className="hover:bg-gray-100 cursor-pointer dark:hover:bg-gray-800">
      {props.url ? (
      <Link href={props.url}>
        {renderizarConteudo()}
      </Link>
      ) : (
        renderizarConteudo()
      )} 
    </li>
  );
}
