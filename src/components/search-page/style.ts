import styled from "styled-components";

export const StyledSearchPage = styled.div`
  display: grid; 
  grid-template-columns: 1fr;
  gap: 20px;
  text-align: center;
  color: #fff;
`

export const StyledHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`

export const StyledSearchBar = styled.div`
  display: flex;
  gap: 5px;
  justify-content: center;
  
  input {
   padding-left: 10px;
   width: 120px;
   outline: none;

   &::placeholder {
    color: #9f9f9f;
   }
  }

  @media (min-width: 480px) {
    input {
      width: 210px;
    }
  }
 
`
export const StyledCard = styled.div`
  display: grid;
  gap: 10px;
`

export const StyledLogo = styled.h1`
  color: #f32020;
  font-size: 25px;

  @media (min-width: 480px) {
    font-size: 30px;
  }

  @media (min-width: 760px) {
    font-size: 35px;
  }
`

export const StyledImage = styled.div`
  margin: 0 -50px;

  img {
    width: 100%;
    object-fit: cover;
  }
`

