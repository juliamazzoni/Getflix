import styled from "styled-components"

export const StyledErrorMessage = styled.p`
  font-size: 12px;

  @media (min-width: 480px) {
    font-size: 16px;
  }
`

export const StyledResults = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  
  gap: 10px;

  @media (min-width: 480px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
`