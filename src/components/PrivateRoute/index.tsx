import { APP_ROUTES } from '@/constants/app-routes'
import useAuth from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { ReactNode, useEffect, useState } from 'react'

type PrivateRouteProps = {
    children: ReactNode
}

export default function PrivateRoute({children} : PrivateRouteProps) {
    const {push} = useRouter()
    const {onAuth} = useAuth()

    const [isUserAuthenticated, setIsUserAuthenticated] = useState<boolean>(false)
    const [authChecked, setAuthChecked] = useState<boolean>(false)


    onAuth().then((logado) => {
      if (logado) {
        console.log("Usuário logado")
        setIsUserAuthenticated(true)
      } else {
        console.log("Usuário não logado")
      setIsUserAuthenticated(false)
      }
      setAuthChecked(true)
    })


    useEffect(() => {            

      if(!isUserAuthenticated && authChecked){
        push(APP_ROUTES.public.login)
      }      

    }, [authChecked ,isUserAuthenticated, push])
    

  return (
    <>
        {!isUserAuthenticated && null}
        {isUserAuthenticated && children}
    </>
  )
}
