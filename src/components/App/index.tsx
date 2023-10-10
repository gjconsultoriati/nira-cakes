import { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import Skeleton from 'react-loading-skeleton'
import { motion } from 'framer-motion'
import { Container, WrapperVideo } from "./styles";

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
            <Hero />
            <WrapperVideo>
              <video autoPlay muted loop >
                <source src={'video/backgroundsection.mp4'} />
              </video>
              <motion.strong
                className="title"
                key={"my_unique_key"}
                exit={{ opacity: 0,  }}
                initial={{ opacity: 0, }}
                animate={{ 
                  opacity: 1 
                }}
                transition={{
                  duration: 4
                }}
              >
                Transformando ocasiões em deliciosas memórias
              </motion.strong>
            </WrapperVideo>
          </>
        )
      }

    </Container>
  )
}