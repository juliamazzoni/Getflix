import styled from "styled-components";

export const StyledSearchPage = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  gap: 20px;
  text-align: center;
  color: #fff;
`

export const StyledSearchBar = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  
  input {
   padding-left: 10px;
   width: 210px;

   &::placeholder {
    color: #9f9f9f;
   }
  }
`
export const StyledCard = styled.div`
  display: grid;
  gap: 10px;
`

export const StyledHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const StyledLogo = styled.h1`
  color: red;
`

export const StyledImage = styled.div`
  margin: 0 -50px;

  img {
    width: 100%;
    object-fit: cover;
  }
`

