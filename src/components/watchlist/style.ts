import styled from "styled-components";

export const StyledWatchList = styled.div`
 display: flex;
 flex-direction: column;
 gap: 10px;
 align-items: flex-start;
`

export const StyledWatchlistRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  flex-wrap: wrap;
  height: 205px;
  justify-content: flex-start;
  overflow: auto;
  padding: 5px;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const StyledWatchlistCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;

  svg {
    height: 14px;
  }

  img {
    height: 180px;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.05);
    }
  }
`