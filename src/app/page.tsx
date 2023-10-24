'use client'
import App from '@/components/App';
import theme from '@/theme';
import GlobalStyles from '@/theme/global';
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { ThemeProvider } from 'styled-components';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])


  if (isLoading) {
    return <Skeleton count={10} height={100} />
  }
  return (
      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
      </ThemeProvider>
  )
}
