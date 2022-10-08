import {
  AjustesIcone,
  InicioIcone,
  NotificacoesIcone,
  ChaveIcone,
  LogoutIcone,
  LogoIcone,
} from "../icons";
import { Logo } from "./Logo";
import { MenuItem } from "./MenuItem";

export function MenuLateral() {
  return (
    <aside className="flex flex-col justify-between">
      <ul>
        <div className="
          flex flex-col items-center justify-center
          bg-gradient-to-r from-indigo-500 to-purple-800
          h-20 w-20">
            <Logo icone={LogoIcone}/>
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
        <MenuItem icone={LogoutIcone} text="Ajustes" url="/" />
      </ul>
    </aside>
  );
}
