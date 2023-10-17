import MailSVG from '@/assets/Email.svg';
import PhoneSVG from '@/assets/Phone.svg';
import LocationSVG from '@/assets/pin.svg';
import Image from "next/image";
import Link from 'next/link';
import { BoxInfo, BoxLogo, Container, Copy, Wrapper, WrapperInfo } from "./styles";

export function Footer() {
  const siteGJ = 'https://www.gjconsultoriati.com.br/'
  return (
    <Container>
      <Wrapper>
        <BoxLogo>
          <h1>Nira Cakes</h1>
          <span>Transformando ocasiões em deliciosas memórias.</span>
        </BoxLogo>
        <BoxInfo>
          <span className='contact'>Nossos contatos</span>
          <WrapperInfo>
            <Image
              src={MailSVG}
              alt="Logo do email"
              width={20}
              height={20}
            />
            <span>nira.2017.lopes@gmail.com</span>
          </WrapperInfo>
          <WrapperInfo>
            <Image
              src={PhoneSVG}
              alt="Logo do email"
              width={20}
              height={20}
            />
            <span>(27) 9.9264-4599</span>
          </WrapperInfo>
          <WrapperInfo>
            <Image
              src={LocationSVG}
              alt="Logo do email"
              width={20}
              height={20}
            />
            <span>Vila Velha - Espirito Santo</span>
          </WrapperInfo>

        </BoxInfo>
      </Wrapper>
      <Copy>
        <Link 
          href={siteGJ}
          target='_blank'
        >
          Copyright @ GJ Consultoria T.I 2023
          All rightes are reserved </Link>
      </Copy>
    </Container>
  )
} 