import { SolIcone } from "../icons"

interface BotaoAlternarTemaProps {
  tema: string
  alternarTema: () => void
}

export function BotaoAlternarTema(props: BotaoAlternarTemaProps){
  return props.tema === 'dark' ? (
    <div 
      onClick={props.alternarTema}
      className=""
    >
      <div className="">
        {SolIcone}
      </div>
      <div className="">
        <span>Claro</span>
      </div>
    </div>
  ) : (
    <div></div>
  )
}