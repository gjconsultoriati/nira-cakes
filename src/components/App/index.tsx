import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Container } from "./styles";
import { Hero } from "@/components/Hero";
import Skeleton from 'react-loading-skeleton'

export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])

  return (
    <Container>
      {
        isLoading ? (
          <Skeleton count={5} height={100} />
        ) : (
          <>
            <header>
              <Header />
            </header>
            <section>
              <Hero />
            </section>
          </>
        )
      }

    </Container>
  )
}