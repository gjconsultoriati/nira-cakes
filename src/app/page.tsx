'use client'
import App from '@/components/App'
import { ThemeProvider } from 'styled-components'
import theme  from '@/theme'
import GlobalStyles from '@/theme/global'
import 'react-loading-skeleton/dist/skeleton.css'
export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}
