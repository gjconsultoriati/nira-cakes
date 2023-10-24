/* eslint-disable @next/next/no-page-custom-font */
import StyledComponentsRegistry from '@/lib/registry';
import { Metadata } from 'next';
import { Montserrat, Quicksand } from 'next/font/google';
import Head from 'next/head';


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
      <body className={ `${montserrat.className} ${quicksand.className}`}>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
