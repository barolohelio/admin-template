import { LogoutIcone } from "../icons";

interface LogoProps {
  icone: any;
}

export function Logo(props: LogoProps) {
  return (
    <div
      className="
      flex flex-col justify-center items-center
      h-16 w-16 rounded-full
      "
    
    >
      {props.icone}
    </div>
  );
}