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

  console.log(results)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const trimmedTitle = (e.target.value).trimEnd()
    setTitle(trimmedTitle)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFetchingError(false)
    setLoading(true)

    try {
      const res = await fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
      const data = await res.json()

      if(data.Search) {
        setResults(data.Search)
      } else {
        setResults([])
        setFetchingError(true)
      }
    } catch (error) {
      console.error("Error fetching data:", error)
      setResults([])
      setFetchingError(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <StyledSearchPage>
        <StyledHeader>
          <StyledLogo>Getflix</StyledLogo>
          <form onSubmit={handleSubmit}>
            <StyledSearchBar>
              <input placeholder="Find your movie - Type a title here" type="text" onChange={handleOnChange}/>
              <StyledRedButton>
                <button type="submit">Search Content</button>
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