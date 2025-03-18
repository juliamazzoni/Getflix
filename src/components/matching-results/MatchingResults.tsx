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
    // Update the heart-icon to be filled 
    const updatedResults = results.map(item => {
      if(item === result){
        item = {...item, isHeartFilled: true} // Add a new key-value pair for the heart icon
        return item
      }
      return item
    })
    setResults(updatedResults) // Update the results array to include the new key-value pair for heart-icon on the item clicked
    setWatchlist([...watchlist, result]) // add the result item to user Watchlist 
    localStorage.setItem('watchlist', JSON.stringify([...watchlist, result]))

  }

  const handleRemoveItem = (result: Results) => {
    // Update the heart-icon to be empty
    const updatedResults = results.map(item => {
      if(item === result){
        item = {...item, isHeartFilled: false}
        return item
      }
      return item
    })
    setResults(updatedResults)

    
    const updatedWatchlist = watchlist.filter(item => item.Title !== result.Title)
    setWatchlist(updatedWatchlist)
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist))
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