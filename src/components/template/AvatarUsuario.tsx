/* eslint-disable @next/next/no-img-element */
import clsx from 'clsx';
import Link from 'next/link'
import useAuth from '../../data/hook/useAuth'

interface AvatarUsuarioProps {
  className?: string;
}

export function AvatarUsuario(props: AvatarUsuarioProps){
  const {usuario} = useAuth()

  return (
    <Link href="/perfil">
    <img 
      src={usuario?.imagemUrl ?? '/images/avatar.svg' } 
      alt="Avatar do Usuário" 
      className={clsx('h-10 w-10 rounded-full cursor-pointer', props.className)}
      />
    </Link>
  )
}