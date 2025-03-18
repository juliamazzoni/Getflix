import { useState } from "react"
import { LoadingIcon } from "../loading-icon/LoadingIcon";
import { MatchingResults } from "../matching-results/MatchingResults";
import { StyledSearchPage, StyledSearchBar, StyledHeader, StyledLogo, StyledImage } from "./style"
import { StyledRedButton } from "../style";
import { Results } from "./types";

export const SearchPage = () => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [title, setTitle] = useState('')
  const [loading, setLoading] = useState(false)
  const [fetchingError, setFetchingError] = useState(false)
  const [results, setResults] = useState<Results[]>([])

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedTitle = (e.target.value).trimEnd() // Remove extra spaces after title on input
    setTitle(trimmedTitle)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFetchingError(false) // reset error state on new fetch 
    setLoading(true) // starts loading before fetching data

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
      const data = await res.json()

      if(data.Search) {
        setResults(data.Search)
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
        <StyledHeader>
          <StyledLogo>Getflix</StyledLogo>
          <form onSubmit={handleSubmit}>
            <StyledSearchBar>
              <input placeholder="Enter movie title" type="text" onChange={handleOnChange}/>
              <StyledRedButton>
                <button type="submit">Search movie</button>
              </StyledRedButton>
            </StyledSearchBar>
          </form>
        </StyledHeader>

        {loading ? 
        <LoadingIcon /> 
        : 
        <MatchingResults results={results} error={fetchingError}/> 
        } 

      
      </StyledSearchPage>
      {results.length === 0 && !loading && <StyledImage><img src="./public/images/background-image.jpeg" alt="" /></StyledImage>}
    </>
  )
}