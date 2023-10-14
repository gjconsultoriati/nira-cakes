'use client'
import styled from "styled-components"

export const Container = styled.div`


  @media (max-width: 768px) {
  .section-higlights{
    margin-top: 22rem;
    margin-bottom: 10rem;
  }

  .higlights{
    text-align: center;
    margin-top: 4rem;
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

