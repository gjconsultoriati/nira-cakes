/* eslint-disable @next/next/no-page-custom-font */
import Head from 'next/head'
import { Metadata } from 'next'
import { Quicksand, Montserrat } from 'next/font/google'
import StyledComponentsRegistry  from '@/lib/registry'

const quicksand = Quicksand({
  subsets: ['latin'], 
  weight: '700', 
  variable: '--font-title'
})
const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--font-subtitle'
});

 export const metadata: Metadata = {
  title: 'Nira Cakes',
  description: 'Nira Cakes store',
}
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  
  return (
    <html lang="en" >
        <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Quicksand:wght@400;700&display=swap" rel="stylesheet"/>
        </Head>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
