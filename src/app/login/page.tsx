"use client"
import useAuth from '@/hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { ToastContainer } from 'react-toastify'
import styles from './page.module.css'

export default function Login() {

    const router = useRouter()
    const { login } = useAuth()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const handleLogin = async (email: string, pass: string) => {
        if (email !== '' && pass !== '' && pass.length > 5) {
            await login(email, pass)
            setEmail("")
            setPassword("")
            router.push('/generate')
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.left}>
                <header onClick={() => router.push('/')} className={styles.header}>
                    <Image src='GenPass-logo.svg' width={136} height={22} alt='Logo' />
                </header>

                <h1 className={styles.title}>A segurança dos seus dados é nossa prioridade.</h1>

            </div>
            <div className={styles.right}>
                <h2 className={styles.subtitle}>Bem-vindo(a) de volta!</h2>
                <span className={styles.text}>Faça login na sua conta para acessar suas senhas com segurança.</span>

                <label className={styles.label} htmlFor="email">Seu E-mail</label>
                <input type="email" name="email" id="email" value={email} onChange={(text) => setEmail(text.target.value)} className={styles.input} placeholder='Campo para inserir o e-mail' />
                <label className={styles.label} htmlFor="senha">Sua Senha</label>
                <input type="password" name="senha" value={password} onChange={(text) => setPassword(text.target.value)} id="senha" className={styles.input} placeholder='Campo para inserir a senha' />
                <button className={styles.btnlogin} onClick={() => handleLogin(email, password)}>Login</button>
                <button className={styles.btncadastro} onClick={() => router.push('/register')}>Não possui conta? Clique para criar a sua conta</button>
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
