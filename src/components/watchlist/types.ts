

import { Results } from "../search-page/types"

export interface WatchlistProps {
  watchlist: Results[],
  setWatchlist: (updatedWatchlist: Results[]) => void,
  results: Results[],
  setResults: (updatedResults: Results[]) => void
}