import styled from "styled-components";

export const StyledSearchPage = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  gap: 20px;
  text-align: center;
`

export const StyledSearchBar = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding: 20px
`

export const StyledResults = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  `

export const StyledCard = styled.div`
  display: grid;
  gap: 10px;
  `