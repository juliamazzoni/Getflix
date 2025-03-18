import { Results } from "../search-page/types";

export interface MatchingResultsProps {
  results: Results[],
  error: boolean,
  setResults: (updatedResults: Results[]) => void,
  setWatchlist: (updatedWatchlist: Results[]) => void,
  watchlist: Results[],
}