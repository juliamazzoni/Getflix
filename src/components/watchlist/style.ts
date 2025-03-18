import styled from "styled-components";

export const StyledWatchList = styled.div`
  display: grid;
  gap: 10px;
  grid-template-colulmns: 1fr;
  justify-items: start;
  overflow-y: hidden;
  position: relative;
  
  h4 {
    position: sticky;
    top: 0;
    left: 0; 
  }
`

export const StyledWatchlistRow = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
`

export const StyledWatchlistCard = styled.div`
  img {
    height: 200px;
    border-radius: 5px;
  }

`