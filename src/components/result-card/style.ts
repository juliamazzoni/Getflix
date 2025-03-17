
import styled from "styled-components"

export const StyledResultCard = styled.div`
  display: grid;
  gap: 15px;
  background-color: #303030;
  justify-items: center;
  align-content: space-between;
  padding: 20px 0;
  border-radius: 5px;
  color: #fff;
  transition: transform 0.3s ease-in-out, background-color 0.3s ease-in-out;; /* smooth animation on card */

  h1 {
    font-size: 16px;
  }

  img {
    width: 80%;
  }

  h4 {
    font-size: 18px;
  }

  &:hover {
    cursor: pointer;
    transform: scale(1.05); /* Slightly enlarges the card */
    background-color: #4f4f4f;
  }
`