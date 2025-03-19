import { useState, useEffect } from "react"
import { LoadingIcon } from "../loading-icon/LoadingIcon";
import { MatchingResults } from "../matching-results/MatchingResults";
import { Watchlist } from "../watchlist/Watchlist";
import { Header } from "../header/Header";
import { StyledSearchPage, StyledImage } from "./style"
import { Results } from "./types";

export const SearchPage = () => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [userInput, setUserInput] = useState<Partial<{title: string, type?: string}>>({})
  const [loading, setLoading] = useState(false)
  const [fetchingError, setFetchingError] = useState(false)
  const [results, setResults] = useState<Results[]>([])
  const [watchlist, setWatchlist] = useState<Results[]>([])

  useEffect(() => {
    const storedItems = localStorage.getItem("watchlist");
    if (storedItems) {
      try {
        setWatchlist(JSON.parse(storedItems)); // Parse only if valid
      } catch (error) {
        console.error("Error parsing watchlist:", error);
        setWatchlist([]); // Reset to empty array if JSON is invalid
      }
    }
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserInput({...userInput, [e.target.name]: (e.target.value).trimEnd()}) // save the name and values of each input in the userInput object
  }                                                               // Remove extra spaces after title on input to avoid errors

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFetchingError(false) // reset error state on new fetch 
    setLoading(true) // starts loading before fetching data

    const type = userInput.type ? `&type=${userInput.type}` : ''
    const title = userInput.title
    
    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}${type}`)
      const data = await res.json()

      if(data.Search) {
        const fetchedData: Results[] = data.Search
        const updatedData = (fetchedData).map((item):Results => { 
          if(watchlist.some(watchlistItem => watchlistItem.imdbID === item.imdbID)){
            return {...item, isHeartFilled: true} // Set the isHeartFilled to true if this item is inside the watchlist
          }
          return item
        })
        setResults(updatedData)
      } else {
        setResults([]) // Set results to an empty array if no data has been found
        setFetchingError(true)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      setResults([])
      setFetchingError(true) 
    } finally {
      setLoading(false) // stops loading after the data is fetched
    }
  }

  return (
    <>
      <StyledSearchPage>

        <Header handleSubmit={handleSubmit} handleOnChange={handleOnChange}/> 

        {watchlist.length > 0 && <Watchlist watchlist={watchlist} setWatchlist={setWatchlist} results={results} setResults={setResults} />}

        {loading ? 
        <LoadingIcon /> 
        : 
        <MatchingResults results={results} error={fetchingError} setResults={setResults} setWatchlist={setWatchlist} watchlist={watchlist}/> 
        } 
      </StyledSearchPage>
      {results.length === 0 && !loading && <StyledImage><img src="/images/background-image.jpeg" alt="" /></StyledImage>}
    </>
  )
}