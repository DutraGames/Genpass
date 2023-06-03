"use client"
import PassItem from '@/components/PassItem'
import { GeneratePass } from '@/functions/GeneratePass'
import useDatabase from '@/hooks/useDatabase'
import { Dado } from '@/types/Dado'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Switch from "react-switch"
import styles from './page.module.css'


export default function Generate() {



  const router = useRouter()
  const [password, setPassword] = useState<string>('')
  const [sizepass, setSizepass] = useState<number>(8)
  const [togle1, setTogle1] = useState<boolean>(true)
  const [togle2, setTogle2] = useState<boolean>(true)
  const [togle3, setTogle3] = useState<boolean>(false)
  const { sendData, onData,DeleteData } = useDatabase()

  const [dados, setDados] = useState<Dado[]>([])


  useEffect(() => {

    const getData = async () => {
      const resultado: Dado[] = await onData()
      setDados(resultado)
    }

    getData()
  }, [onData,dados])


  const generatePassword = () => {
    
    const gen = GeneratePass(togle1,togle2,togle3,sizepass)

    setPassword(gen!)
    sendData(gen!)
  }



  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <header onClick={() => router.push('/')} className={styles.header}>
          <Image src='GenPass-logo.svg' width={136} height={22} alt='Logo' />
        </header>

        <div className={styles.passfield}>
          <label className={styles.label}>Senha gerada</label>
          <input className={styles.fieldgen} type="text" disabled value={password} />

          <label className={styles.label}>Tamanho da Senha: {sizepass}</label>
          <div className={styles.fieldrange}>
            <span className={styles.numrange}>4</span>
            <input type="range" className={styles.range} min={4} max={32} value={sizepass} onChange={(e) => setSizepass(Number(e.target.value))} />
            <span className={styles.numrange}>32</span>
          </div>


          <label className={styles.label}>Configurações</label>
          <div className={styles.fieldconfig}>
            <span className={styles.numrange}>Incluir números</span>
            <Switch onChange={() => setTogle1(!togle1)}
              checked={togle1}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor='#082796'
              offColor='#222'
            />
          </div>
          <div className={styles.fieldconfig}>
            <span className={styles.numrange}>Incluir letras</span>
            <Switch onChange={() => setTogle2(!togle2)}
              checked={togle2}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor='#082796'
              offColor='#222'
            />
          </div>
          <div className={styles.fieldconfig}>
            <span className={styles.numrange}>Incluir símbolos</span>
            <Switch onChange={() => setTogle3(!togle3)}
              checked={togle3}
              uncheckedIcon={false}
              checkedIcon={false}
              onColor='#082796'
              offColor='#222'
            />
          </div>

          <button className={styles.btngen} onClick={generatePassword}>Gerar senha</button>
        </div>
      </div>


      <div className={styles.right}>
        <h2 className={styles.lastpass}>Últimas Senhas:</h2>

        <div className={styles.passcontainer}>
          {dados.map((senha) => {
            return (
              <PassItem 
              key={senha.chave}
              senha={senha.senha}
              onDelete={() => DeleteData(senha.chave)}
              />
            )
          })}
        </div>
      </div>
    </main>
  )
}