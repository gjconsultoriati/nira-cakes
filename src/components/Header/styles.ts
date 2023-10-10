import styled from "styled-components"; 

export const Container = styled.header`
  background-color: ${({theme}) => theme.COLORS.MAIN};
  height: 5rem;
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  button {
    border: 0;
    padding: 1rem;
    background: transparent;
    
    img {
      width: 30px;
      height: 30px;
    }
  }
  
`