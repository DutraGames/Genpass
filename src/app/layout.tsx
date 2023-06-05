'use client'
import { Archivo } from 'next/font/google';
import { usePathname } from 'next/navigation';
import './globals.css';

import PrivateRoute from '@/components/PrivateRoute';
import { checkPublic } from '@/functions/check-public';

const archivo = Archivo({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  const pathname = usePathname()

  const isPublic = checkPublic(pathname)


  return (
    <html lang="pt-br">
      <body className={archivo.className}>
        {isPublic && children}
        {!isPublic && <PrivateRoute>{children}</PrivateRoute>}
      </body>
    </html>
  )
}