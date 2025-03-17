import styled from "styled-components";

export const StyledCardDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  background-color: #303030;
  padding: 25px;
  justify-items: center;
  color: #fff;
  max-width: 350px;
  min-width: 220px;
  margin: auto;

  @media (min-width: 768px) {
    max-width: 700px;
  }
` 

