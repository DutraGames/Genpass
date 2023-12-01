"use client"
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import styles from './page.module.css'
import { PlayCircle } from 'iconsax-react'

export default function Home() {

  const router = useRouter()

  return (
    <main className={styles.main}>
      <div className={styles.left}>
        <header onClick={() => router.push('/')} className={styles.header}>
          <Image src='GenPass-logo.svg' width={120} height={120} alt='Logo' />
          <p style={{ fontSize: '1rem', color: '#424CF9', fontWeight: 'bold' }}>GenPass</p>
        </header>

        <h1 className={styles.title}>Comece <br /> a gerenciar suas <br /> senhas de <br /> forma segura.</h1>
      
        <div className={styles.start} onClick={() => router.push('/login')}>
          <p>Comece</p>
          <PlayCircle size={70} color="#000" variant='Bold' />
        </div>
      
      </div>
      <div className={styles.right}>
      </div>
    </main>
  )
}
