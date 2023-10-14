'use client'
import styled from "styled-components";

export const Container = styled.div`
 justify-content: center;
 align-items: center;
 margin-top: 4rem;
 display: flex;
  
 .swiper{
 }
 .swiperSlide {
  display: flex;
  align-items: center;
  justify-content: center;
 }
 .swiper-button-next {
  color: ${({theme}) => theme.COLORS.SECONDARY}
 }
 .swiper-button-prev {
  color: ${({theme}) => theme.COLORS.SECONDARY}
 }
 .swiper-pagination-bullet-active{
    background: ${({theme}) => theme.COLORS.SECONDARY}
    }
`;


export const ScrollCards = styled.div`
  flex-direction: row;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

`;


