import {
  AjustesIcone,
  InicioIcone,
  NotificacoesIcone,
  ChaveIcone,
  LogoutIcone,
} from "../icons";
import { IconeLogo } from "../icons/IconeLogo";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";

export function MenuLateral() {
  return (
    <aside className="
      flex flex-col justify-between 
      dark:bg-gray-900 dark:text-gray-200
      text-gray-900 bg-gray-200"
    >
      <ul>
        <div className="
          flex flex-col items-center justify-center

          h-20 w-20">
            <Logo icone={IconeLogo} />
        </div>
        <MenuItem icone={InicioIcone} text="Início" url="/" />
        <MenuItem icone={AjustesIcone} text="Ajustes" url="/ajustes" />
        <MenuItem
          icone={NotificacoesIcone}
          text="Notificações"
          url="/notificacoes"
        />
        <MenuItem icone={ChaveIcone} text="Chaves" url="/chaves" />
      </ul>
      <ul>
        <MenuItem 
          icone={LogoutIcone} 
          text="Logout" 
          onClick={() => console.log('Logout')}
          className={'text-red-600 dark:text-red-600 hover:bg-red-400 hover:text-white dark:hover:text-white'}
         />
      </ul>
    </aside>
  );
}
