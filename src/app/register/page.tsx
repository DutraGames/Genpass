"use client"
import useAuth from '@/hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import "react-toastify/ReactToastify.min.css"
import styles from './page.module.css'

export default function Register() {
    const router = useRouter()
    const { create } = useAuth()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [username, setUsername] = useState<string>("")


    const handleCreate = async (email: string, pass: string, name: string) => {
        if (email !== '' && pass !== '' && name !== '' && pass.length > 5) {
            await create(email, pass, name)
            setEmail("")
            setPassword("")
            setUsername("")
            router.push('/generate')
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.left}>
                <header onClick={() => router.push('/')} className={styles.header}>
                    <Image src='GenPass-logo.svg' width={136} height={22} alt='Logo' />
                </header>

                <h1 className={styles.title}>Comece a gerenciar suas senhas de forma segura.</h1>

            </div>
            <div className={styles.right}>
                <h2 className={styles.subtitle}>Faça o seu cadastro!</h2>
                <span className={styles.text}>Crie sua conta em apenas alguns passos simples, e começar a utilizar o nosso aplicativo.</span>
                <label className={styles.label} htmlFor="nome">Seu Nome</label>
                <input type="text" name="nome" id="nome" className={styles.input} value={username} onChange={(text) => setUsername(text.target.value)} placeholder='Campo para inserir o nome' />
                <label className={styles.label} htmlFor="email">Seu E-mail</label>
                <input type="email" name="email" id="email" className={styles.input} value={email} onChange={(text) => setEmail(text.target.value)} placeholder='Campo para inserir o e-mail' />
                <label className={styles.label} htmlFor="senha">Sua Senha</label>
                <input type="password" name="senha" id="senha" className={styles.input} value={password} onChange={(text) => setPassword(text.target.value)} placeholder='Campo para inserir a senha' />
                <button className={styles.btnlogin} onClick={() => handleCreate(email, password, username)}>Cadastrar-se</button>
                <button className={styles.btncadastro} onClick={() => router.push('/login')}>Já possui conta? Clique para fazer o login</button>
                <ToastContainer position="bottom-left"
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover
                    theme="colored" />
            </div>
        </main>
    )
}
