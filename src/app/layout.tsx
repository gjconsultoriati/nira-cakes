import StyledComponentsRegistry  from '@/lib/registry'
import { Quicksand, Montserrat } from 'next/font/google'
import { Metadata } from 'next'

const quicksand = Quicksand({
  subsets: ['latin'], 
  weight: '700', 
  variable: '--font-quick'
})
const montserrat = Montserrat({
  subsets: ['latin'], 
  weight: ['400', '700'],
  style: ['normal'],
  variable: '--font-mont'
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
    <html lang="en" className={`${quicksand.className}, ${montserrat.className}`}>
      <body>
        <StyledComponentsRegistry>
          {children}
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}
