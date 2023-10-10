import Image from "next/image";
import { ButtonCallToAction, Container, HeroContainer, Subtitlte, Title } from "./styles";
import ImageHero from '@/assets/heroImage.svg';
import ArrowDown from '@/assets/arrowdown.svg';
import { motion } from 'framer-motion'


export function Hero() {

  return (
    <Container>
      <Title>
        Seja Bem Vindo
        a nossa loja
      </Title>

      <Subtitlte>
        Transformando ocasiões em deliciosas memórias.
      </Subtitlte>

      <HeroContainer
        animate={{ x: [-250, 0] }}
        transition={{ ease: "backIn", duration: 3 }}
        whileHover={{
          scale: 1.2
        }}
        whileTap={{ scale: 0.8 }}
      >
        <Image
          src={ImageHero}
          alt="Imagem de bolo da hero"
        />
      </HeroContainer>

      <ButtonCallToAction>
        <motion.button
          initial={{ opacity: 0.6 }}
          whileHover={{
            transition: { duration: 2 },
            scale: 1.2
          }}
          whileTap={{ scale: 0.9 }}
          whileInView={{ opacity: 1 }}
         
        >
          Conheça agora
          
            <Image
              src={ArrowDown}
              alt="Ação para conhecer mais"
            />
        </motion.button>
      </ButtonCallToAction>
    </Container>
  )
}