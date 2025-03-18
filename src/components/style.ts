import styled from "styled-components"

export const StyledRedButton = styled.div`
  button {
    color: #fff;
    background-color: #9f1313;
    border: none;
    padding: 5px 20px;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s ease-in-out;

    &:hover {
      background-color: #f32020;
    }
  }

  @media (max-width: 480px) {
    button {
      font-size: 10px;
    }
  }
`