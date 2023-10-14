'use client'
import App from '@/components/App'
import theme from '@/theme'
import GlobalStyles from '@/theme/global'
import 'react-loading-skeleton/dist/skeleton.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { ThemeProvider } from 'styled-components'

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <App />
    </ThemeProvider>
  )
}
