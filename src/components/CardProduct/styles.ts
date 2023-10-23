import styled, { css } from "styled-components";

type PropsStyles = {
  small?: boolean;
}
export const WrapperCard = styled.div<PropsStyles>`
  align-items: center;
  justify-content: center;
  border: 2px solid ${({ theme }) => theme.COLORS.MAIN};
  box-shadow:  0px 4px 12px rgba(0, 0, 0, 0.09);
  padding: 1rem;
  margin-left: 15px;
  margin-top: 4rem;
  border-radius: 8px;
  margin-bottom: 4rem;
  transition: all;
 
  &:hover {
    border: 2px solid ${({ theme }) => theme.COLORS.SECONDARY};
    cursor: pointer;
  }
  @media (max-width: 768px){
    img {
      width: 100%;
      height: 240px;
      margin-bottom: 50px;
      object-fit: contain;
    }
    ${({ small, theme }) => (
    small &&
    css`
      width: 267px;
      height: 356px;
      background: ${theme.COLORS.WHITE};
      margin-bottom: 10rem;
      
      img {
        width: 100%;
        height: 150px;
      }
    `
  )}

  }
`


export const ContentCard = styled.div<PropsStyles>`
  width: 100%;

  button {
      display: flex;
      align-items: center;
      justify-content: center;

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
  
   @media (max-width: 768px){
      max-width: 200px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      text-align: center;


      ${({ theme, small }) => small && (
        
        css`
          span {
            word-break: break-word;
            font-size: ${theme.FONT_SIZE.XS}px;
            font-family: ${theme.FONT_FAMILY.Montserrat};
            color: ${theme.COLORS.BLACK}
            font-weight: 500;
           
          }

          button {
            height: 2.5rem;
            display: flex;
          }
        `
    )}
  }
`;