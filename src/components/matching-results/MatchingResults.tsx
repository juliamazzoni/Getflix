import { MatchingResultsProps } from "./types"
import { StyledResults, StyledErrorMessage, StyledFooter } from "./style"
import { ResultCard } from "../result-card/ResultCard"
import { useNavigate } from "react-router-dom"
import { ReactSVG } from "react-svg"
import FilledHeartIcon from '/assets/icons/filled-heart-icon.svg';
import EmptyHeartIcon from '/assets/icons/empty-heart-icon.svg';
import { Results } from "../search-page/types"


export const MatchingResults = ({ results, error, setResults, setWatchlist, watchlist }: MatchingResultsProps) => {
  const navigate = useNavigate()

  const handleCardClick = (id: string) => {
    navigate(`/movie/${id}`)
  }

  const handleAddItem = (result: Results) => {
    const updatedResults = results.map(item => {
      if(item.imdbID === result.imdbID){
        item = {...item, isHeartFilled: true} // Add a new key-value pair so the heart-icon will be filled
        return item
      }
      return item
    })
    setResults(updatedResults) // Update the results array to include the new key-value pair for heart-icon once clicked

    setWatchlist([...watchlist, result]) // add the clicked item to user Watchlist 
    localStorage.setItem('watchlist', JSON.stringify([...watchlist, result])) // add the clicked item to local storage
  }

  const handleRemoveItem = (result: Results) => {
    const updatedResults = results.map(item => {
      if(item.imdbID === result.imdbID){
        item = {...item, isHeartFilled: false} // Set the isHeartFilled to false to the heart-icon will be empty
        return item
      }
      return item
    })
    setResults(updatedResults) // Update the results array to update the key-value pair for heart-icon once is clicked

    const updatedWatchlist = watchlist.filter(item => item.imdbID !== result.imdbID)
    setWatchlist(updatedWatchlist) // Remove the clicked item from wathclist 
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist)) // Remove the clicked item from local storage 
  }

  return (
    <>
      {error ?  <StyledErrorMessage>Oops... something went wrong. Try again!</StyledErrorMessage> 
      :  
      <StyledResults>
        {results.map(result => 
          <ResultCard key={result.imdbID}  >
            <h1>{result.Title}</h1>
            <img src={result.Poster} alt="" onClick={() => handleCardClick(result.imdbID)} />
            <StyledFooter>
              <h4>{result.Year}</h4>
              {result.isHeartFilled ? 
              <ReactSVG src={FilledHeartIcon} onClick={() => handleRemoveItem(result)} /> : 
              <ReactSVG src={EmptyHeartIcon} onClick={() => handleAddItem(result)} /> }
            </StyledFooter>
           
          </ResultCard>
        )}
      </StyledResults>   
      }      
    </>
  )
}