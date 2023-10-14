import MenuIcon from '@/assets/menu.svg';
import Image from "next/image";
import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <span>Nira Cakes</span>
      <button>
        <Image
          src={MenuIcon}
          alt="Menu de opções"
        />
      </button>
    </Container>
  )
}