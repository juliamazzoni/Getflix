import styled from "styled-components"

export const StyledContentInfo = styled.div`
  display: grid;
  grid-template-columns:  300px 1fr;
  gap: 20px;
  border-radius: 5px;
`

export const StyledDetails = styled.div`
  display: flex; 
  flex-direction: column;
  justify-content: center;
  justify-items: center;
  
  div {
    display: flex; 
    gap: 10px;
    align-items: baseline;
    border-bottom: 1px solid #fff; 
    padding: 12px;
  }

  /* Remove border-bottom from the last div */
  div:last-child {
    border-bottom: none;
  }
`