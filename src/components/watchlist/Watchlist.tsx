import { WatchlistProps } from "./types"
import { StyledWatchList, StyledWatchlistRow, StyledWatchlistCard } from "./style"
import { useNavigate } from "react-router-dom"
import { ReactSVG } from "react-svg"
import CloseIcon from '/assets/icons/close-icon.svg';
import { Results } from "../search-page/types";


export const Watchlist = ({ watchlist, setWatchlist, results, setResults }: WatchlistProps) => {
  const navigate = useNavigate()

  const handleCardClick = (id: string) => {
    navigate(`/movie/${id}`)
  }

  const handleRemoveItem = (item: Results) => {

    const updatedResults = results.map(resultsItem => {
      if(resultsItem.imdbID === item.imdbID){
        return {...resultsItem, isHeartFilled: false} // Make sure the isHeartFilled is empty in the results array in case we still see the results array when removing an item from the watchlist
      }
      return resultsItem
    })
      setResults(updatedResults)

    const updatedWatchlist = watchlist.filter(watchlistItem => watchlistItem.imdbID !== item.imdbID)

    setWatchlist(updatedWatchlist) // Remove the clicked item from watchlist 
    localStorage.setItem('watchlist', JSON.stringify(updatedWatchlist)) // Remove the clicked item from local storage 
 
  }

  return (
    <StyledWatchList>
      <h4>My Watchlist</h4>
      <StyledWatchlistRow>
        {watchlist.map(item => {
          return (
            <StyledWatchlistCard key={item.imdbID}>
              <img src={item.Poster} alt="" onClick={() => handleCardClick(item.imdbID)}/>
              <ReactSVG src={CloseIcon} onClick={() => handleRemoveItem(item)} /> 
            </StyledWatchlistCard>
          )
        })}
      </StyledWatchlistRow>
    </StyledWatchList>
  )
}