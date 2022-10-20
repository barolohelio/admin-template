/* eslint-disable jsx-a11y/alt-text */
import Script from 'next/script'
import Image from 'next/image'
import router from 'next/router'
import loading from '../../public/images/loading.gif'
import useAuth from '../data/hook/useAuth'

export function ForcarAutenticacao(props){
  const {usuario, carregando} = useAuth()

  function renderizarConteudo(){
    return (
      <>
          <Script 
            id='scriptDeProtecao'
            dangerouslySetInnerHTML={{
              __html:`
                if(!document.cookie?.includes("admin-template-auth")){
                  window.location.href = "/autenticacao"
                }
              `
            }}  
          />
        {props.children}
      </>
    )
  }

  function renderizarCarregando(){
    return (
      <div className="flex justify-center h-screen">
        <Image src={loading} />
      </div>
    )
  }

  if(!carregando && usuario?.email){
    return renderizarConteudo()
  } else if(carregando){
    return renderizarCarregando()
  } else {
    router.push('/autenticacao')
    return null
  }
}