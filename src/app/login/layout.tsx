import { Archivo } from 'next/font/google';
import '../globals.css';

const archivo = Archivo({ subsets: ['latin'] })

export const metadata = {
  title: 'GenPass - Login',
  description: 'Página de Login do GenPass',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="pt-br">
      <body className={archivo.className}>
        {children}
      </body>
    </html>
  )
}