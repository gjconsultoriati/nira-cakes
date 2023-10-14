import styled from "styled-components";

export const WrapperCard = styled.div`
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
      background-color:  ${({ theme }) => theme.COLORS.SECONDARY};
      
      font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
      font-family: ${({ theme }) => theme.FONT_FAMILY.Montserrat};
      color: ${({ theme }) => theme.COLORS.WHITE};
      font-weight: bold;
      transition: all 0.2s;

      &:hover {
        background-color:  ${({ theme }) => theme.COLORS.MAIN};
        border: 3px solid ${({ theme }) => theme.COLORS.SECONDARY};
        color: ${({ theme }) => theme.COLORS.TEXT};
      }
    }

    span {
      word-break: break-word;
      font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
      font-family: ${({ theme }) => theme.FONT_FAMILY.Montserrat};
      color: ${({ theme }) => theme.COLORS.TEXT};
   }
  
`;