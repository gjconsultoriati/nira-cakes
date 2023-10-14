import { ContentCard, WrapperCard } from "./styles";

import ImageHero from '@/assets/heroImage.svg';
import Image from 'next/image';

type Props ={
  data: {
    id: string,
    name: string
  }
}
export function CardProduct({data }: Props) {
  return (
    <WrapperCard>
    <Image 
      src={ImageHero}
      alt='Bolo no prato para exposição'
    />
    <ContentCard>
      <span >{data.name}</span>
      <button>Saiba mais</button>
    </ContentCard>
  </WrapperCard>

  )
}