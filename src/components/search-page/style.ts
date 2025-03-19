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
  align-items: stretch;
  gap: 10px;

  @media (min-width: 768px) {
    flex-direction: row;
    align-items: baseline;
  }
`

export const StyledSearchBar = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 10px;
  justify-items: center;  
`

export const StyledTextInputAndButton = styled.div`
  display: flex;
  gap: 5px;
  align-items: center;
`

export const StyledTextInput = styled.div`
   input {
    outline: none;
  
    &::placeholder {
      color: #9f9f9f;
     }
   }

   @media (min-width: 480px) {
    input {
      width: 180px;
      padding: 2px;
    }
  }
`

export const StyledTypeInputContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
`

export const StyledTypeInput = styled.div`
  display: flex;
  gap: 0;
  width: 120px;
  justify-content: center;
  align-items: center;

  label {
    font-size: 8px;
  }


  @media (min-width: 380px) {
    label {
      font-size: 10px;
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

