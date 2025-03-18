import { WatchlistProps } from "./types"
import { StyledWatchList, StyledWatchlistRow, StyledWatchlistCard } from "./style"
import { useNavigate } from "react-router-dom"


export const Watchlist = ({ watchlist }: WatchlistProps) => {
  const navigate = useNavigate()

  const handleCardClick = (id: string) => {
    navigate(`/movie/${id}`)
  }

  return (
    <StyledWatchList>
      <h4>My Watchlist</h4>
      <StyledWatchlistRow>
        {watchlist.map(item => {
          return (
            <StyledWatchlistCard key={item.imdbID}>
              <img src={item.Poster} alt="" onClick={() => handleCardClick(item.imdbID)}/>
            </StyledWatchlistCard>
          )
        })}
      </StyledWatchlistRow>
    </StyledWatchList>
  )
}