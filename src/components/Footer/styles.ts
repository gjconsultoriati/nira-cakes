'use client'

import styled from "styled-components";

export const Container = styled.div`
  background-color: ${({theme}) => theme.COLORS.TEXT};
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
`
export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: space-between;
  margin-bottom: 2rem;
`


export const BoxLogo = styled.div`
  width: 180px;
  h1 {
    color: ${({theme}) => theme.COLORS.MAIN};
    font-size: ${({theme}) => theme.FONT_SIZE["2XL"]}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.QUICK};
  }

  span {
    color: ${({theme}) => theme.COLORS.MAIN};
    font-size: ${({theme}) => theme.FONT_SIZE.SM};
    font-family: ${({theme}) => theme.FONT_FAMILY.Montserrat};
  }

`;
export const BoxInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  
  .contact {
    color: ${({theme}) => theme.COLORS.MAIN};
    font-size: ${({theme}) => theme.FONT_SIZE.LG}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.Montserrat};
    text-align: center;
  }
`;
export const WrapperInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  img {
    margin-right: 10px;
  }

  span {
    color: ${({theme}) => theme.COLORS.MAIN};
    font-size: ${({theme}) => theme.FONT_SIZE.SM};
    font-family: ${({theme}) => theme.FONT_FAMILY.Montserrat};
  }
`;

export const Copy = styled.div`
   a {
    color: ${({theme}) => theme.COLORS.MAIN};
    font-size: ${({theme}) => theme.FONT_SIZE.XS}px;
    font-family: ${({theme}) => theme.FONT_FAMILY.Montserrat};
    text-decoration: none;
  }
`
