import { MatchingResultsProps } from "./types"
import { StyledResults } from "./style"
import { ResultCard } from "../result-card/ResultCard"
import { useNavigate } from "react-router-dom"

export const MatchingResults = ({ results, error }: MatchingResultsProps) => {
  const navigate = useNavigate()

  const handleCardClick = (id: string) => {
    navigate(`/movie/${id}`)
  }

  return (
    <>
      {error ?  <p>Oops... something went wrong. Try again!</p> 
      :  
      <StyledResults>
        {results.map(result => 
          <ResultCard key={result.imdbID} onClick={() => handleCardClick(result.imdbID)} >
            <h1>{result.Title}</h1>
            <img src={result.Poster} alt="" />
            <h4>{result.Year}</h4>
          </ResultCard>
        )}
      </StyledResults>   
      }      
    </>
  )
}