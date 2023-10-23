import { Carousel } from "@/components/Carousel";
import { Footer } from '@/components/Footer';
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { motion } from 'framer-motion';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardProduct } from "../CardProduct";
import { Container, ScrollCards, WrapperVideo } from "./styles";

export default function App() {
  const cakeOne = [
    
    {
      id: String(Math.random() * 1000),
      name: 'Bolo de Morango com coco',
    },
    {
      id: String(Math.random() * 1000),
      name: 'Bolo de Maracuja com nutella',
    },
    {
      id: String(Math.random() * 1000),
      name: 'Bolo de prestigio e brigadeiro',
    },
    
  ]
  return (
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
      <section className="section-other-products">
        <h1 className="higlights">Explore outros</h1>
        <ScrollCards>
          <Swiper
            modules={[Navigation, Pagination]}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true, }}
          >
            {
              cakeOne.map((cake) => (
                <SwiperSlide key={cake.id} className='swiperSlide'>
                  <CardProduct 
                    data={cake}
                    small
                  />
                </SwiperSlide>
              ))
            }
          </Swiper>
        </ScrollCards>
      </section>
      <footer>
        <Footer />
      </footer>

    </Container>
  )

}