'use client'
import styled from "styled-components"

export const Container = styled.div`

  

` 
export const WrapperVideo = styled.section`
  position:absolute;
  @media (max-width: 768px) {
   video {
    position: relative;
    max-width: auto;
    width: 100%;
    height: auto;
    object-fit: cover;
    margin-bottom: 4rem;

   }
   .title {
    width: 250px;
    align-items: center;
    justify-content: center;
    text-align: center;
    position:absolute;
    top:40%;
    left:50%;
    transform:translate(-50%,-50%);
    display: flex;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }
 }
`