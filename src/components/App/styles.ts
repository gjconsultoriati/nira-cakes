'use client'
import styled from "styled-components";

export const Container = styled.div`

  @media (max-width: 768px) {
    .section-higlights{
      margin-top: 22rem;
      margin-bottom: 5rem;
    }

    .higlights{
      text-align: center;
      margin-top: 4rem;
      }
    .section-other-products {
      margin-top: 5rem;
      background-color: ${({ theme }) => theme.COLORS.SECONDARY};
        h1 {
          padding: 1rem;
          color: #FFFFFF;
        }
    }
    .swiper-button-next {
       color: ${({ theme }) => theme.COLORS.SECONDARY}
    }
    .swiper-button-prev {
      color: ${({ theme }) => theme.COLORS.SECONDARY}
    }
    .swiper-pagination-bullet-active{
      background: ${({ theme }) => theme.COLORS.MAIN}
    }
    
  }
  
`

export const WrapperVideo = styled.section`

@media (max-width: 768px) {
   position:absolute;
   video {
    position: relative;
    max-width: auto;
    width: 100%;
    height: auto;
    object-fit: cover;

   }
   .title {
    width: 250px;
    align-items: center;
    justify-content: center;
    text-align: center;
    position:absolute;
    top:50%;
    left:50%;
    transform:translate(-50%,-50%);
    display: flex;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
 }

`


export const ScrollCards = styled.div`
  flex-direction: row;
  display: flex;
  overflow-x: auto;
  scroll-behavior: smooth;

  .swiperSlide {
    display: flex;
    justify-content: center;
 }
`;

export const WrapperCard = styled.div`
  align-items: center;
  justify-content: center;
  border: 1px solid ${({ theme }) => theme.COLORS.SECONDARY};
  box-shadow:  0px 4px 12px rgba(0, 0, 0, 0.5);
  padding: 1rem;
  margin-left: 15px;
  margin-top: 1.5rem;
  border-radius: 8px;
  margin-bottom: 4rem;
  transition: all 0.2s;
  background-color: ${({ theme }) => theme.COLORS.WHITE};

  &:hover {
    border: 1px solid ${({ theme }) => theme.COLORS.TEXT};
    cursor: pointer;
  }
  @media (max-width: 768px){
    img {
      width: 100%;
      height: 240px;
      margin-bottom: 50px;
      object-fit: contain;
    }
  }
`


export const ContentCard = styled.div`
  width: 100%;
  @media (max-width: 768px){
    max-width: 200px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
  }


  button {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 1rem;

      margin-top: 1.5rem;
      border: none;
      height: 3.75rem;
      width: 150px;
      border-radius: 12px;
      background-color:  ${({ theme }) => theme.COLORS.MAIN};
      
      font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
      font-family: ${({ theme }) => theme.FONT_FAMILY.Montserrat};
      color: ${({ theme }) => theme.COLORS.TEXT};
      font-weight: bold;
      transition: all 0.2s;

      &:hover {
        background-color:  ${({ theme }) => theme.COLORS.SECONDARY};
        border: 3px solid ${({ theme }) => theme.COLORS.SECONDARY};
        color: ${({ theme }) => theme.COLORS.TEXT};
      }
    }

    span {
      word-break: break-word;
      font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
      font-family: ${({ theme }) => theme.FONT_FAMILY.Montserrat};
      color: ${({ theme }) => theme.COLORS.BLACK};
      font-weight: 600;
   }
  
`;

