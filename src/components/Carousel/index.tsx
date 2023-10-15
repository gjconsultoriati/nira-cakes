import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { CardProduct } from "../CardProduct";
import { Container, ScrollCards } from "./styles";


export function Carousel() {
  const cakeOne = [
    {
      id: String(Math.random() * 1000),
      name: 'Bolo de Chocolate com chantininho com nutella e brigadeiro',
    },
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
      <ScrollCards>
        <Swiper
          modules={[Navigation, Pagination ]}
          slidesPerView={cakeOne.length - 3}
          navigation
          pagination={{ clickable: true, }}
        >
          {
            cakeOne.map((cake) => (
              <SwiperSlide key={cake.id} className='swiperSlide'>
                <CardProduct
                  data={cake}
                />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </ScrollCards >
    </Container>

  )
}