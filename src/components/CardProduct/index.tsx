import { ContentCard, WrapperCard } from "./styles";

import ImageHero from '@/assets/heroImage.svg';
import Image from 'next/image';

type Props = {
  data: {
    id: string,
    name: string
  }
  small?: boolean;
}
export function CardProduct({ small, data }: Props) {
  return (
    <WrapperCard
      small={small}
    >
      <Image
        src={ImageHero}
        alt='Bolo no prato para exposição'
      />
      <ContentCard small={small}>
        <span >{data.name}</span>
        <button>Saiba mais</button>
      </ContentCard>
    </WrapperCard>
  )
}