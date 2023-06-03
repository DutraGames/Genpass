"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'

export default function Home() {

  const router = useRouter()

  return (
    <main className={styles.main}>
      <div className={styles.left}>
                <header onClick={() => router.push('/')} className={styles.header}>
                    <Image src='GenPass-logo.svg' width={136} height={22} alt='Logo' />
                </header>

                <h1 className={styles.title}>Comece a gerenciar suas senhas de forma segura.</h1>

            </div>
            <div className={styles.right}>
                <h2 className={styles.subtitle}>Bem-vindo(a)</h2>
                <span className={styles.text}>Crie uma conta gratuita ou faça login se já tiver uma.</span>
                <button className={styles.btnlogin} onClick={() => router.push('/login')}>Faça login</button>
                <button className={styles.btncadastro} onClick={() => router.push('/register')}>Cadastre-se</button>
            </div>
    </main>
  )
}
