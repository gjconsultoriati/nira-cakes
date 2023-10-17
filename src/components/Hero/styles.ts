import { motion } from "framer-motion";
import styled from "styled-components";

export const Container = styled.header`
  background-color: ${({ theme }) => theme.COLORS.MAIN};
  border-top: 2px solid ${({ theme }) => theme.COLORS.SECONDARY};
  box-shadow: border 0 -1px 0 0  ${({ theme }) => theme.COLORS.SECONDARY};
  
  @media (max-width: 768px) {
    height: 40.813rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1 {
      text-align: center;
      width: 300px;
    } 
    span {
      text-align: center;
    }
  }
`

export const Title = styled.h1`
  font-size: ${({ theme }) => theme.FONT_SIZE["5XL"]}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.QUICK};
  color: ${({ theme }) => theme.COLORS.TEXT};


`
export const Subtitlte = styled.span`
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  font-family: ${({ theme }) => theme.FONT_FAMILY.Montserrat};
  font-weight: 500;
  color: ${({ theme }) => theme.COLORS.TEXT};
`

export const HeroContainer = styled(motion.div)`
  width: 217px;
  height: 215px;
  background: ${({ theme }) => theme.COLORS.WHITE};
  margin-top: 46px;
  border-radius: 12px;
  position: relative;


  img {
    position: absolute;
    z-index: 10;
    top: -40%;
  }
`;

export const ButtonCallToAction = styled.div`
  margin-top: 50px;

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;

    border: none;
    height: 3.75rem;
    width: 215px;
    border-radius: 12px;
    background-color:  ${({ theme }) => theme.COLORS.TEXT};
    
    font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
    font-family: ${({ theme }) => theme.FONT_FAMILY.Montserrat};
    color: ${({ theme }) => theme.COLORS.SECONDARY};
    font-weight: 600;
    transition: all 0.2s;

    &:hover {
      background-color: #FEF2EA;
    }
  }
`;