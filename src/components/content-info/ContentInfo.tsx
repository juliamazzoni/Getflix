
import { ContentInfoProps } from "./types"
import { StyledContentInfo, StyledDetails } from "./style"


export const ContentInfo = ({ cardDetails }: ContentInfoProps) => {
  return (
    <StyledContentInfo>
      <img src={cardDetails?.Poster} alt={cardDetails?.Title} />
      <StyledDetails>
        <div>
          <h4>Title: </h4>
          <h5>{cardDetails?.Title}</h5>
        </div>
        <div>
          <h4>Plot: </h4>
          <h5>{cardDetails?.Plot}</h5>
        </div>
        <div>
          <h4>Year: </h4>
          <h5>{cardDetails?.Year}</h5>
        </div>
        <div>
          <h4>Actors: </h4>
          <h5>{cardDetails?.Actors}</h5>
        </div>
        <div>
          <h4>Awards: </h4>
          <h5>{cardDetails?.Awards}</h5>
        </div>
        <div>
          <h4>Country: </h4>
          <h5>{cardDetails?.Country}</h5>
        </div>
        <div>
          <h4>Director: </h4>
          <h5>{cardDetails?.Director}</h5>
        </div>
        <div>
          <h4>Runtime: </h4>
          <h5>{cardDetails?.Runtime}</h5>
        </div>
      </StyledDetails>
    </StyledContentInfo>
  )
}