import { Carousel } from "@/components/Carousel";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import Skeleton from 'react-loading-skeleton';

import { Container, WrapperVideo } from "./styles";
export default function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    setIsLoading(false)
  }, [isLoading])

  return (
    <>
      {
        isLoading ? (
          <Skeleton count={10} height={100} />
        ) : (
          <Container>
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
                exit={{ opacity: 0, }}
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
            <section className="section-higlights" >
                <h1 className="higlights">Em Destaques</h1>
              <Carousel />
            </section>
            
          </Container>
        )
      }

    </>
  )
}