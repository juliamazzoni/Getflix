import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { StyledSearchPage, StyledSearchBar, StyledResults } from "./style"
import { ResultCard } from "../result-card/ResultCard";
import { Results } from "./types";

export const SearchPage = () => {
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [title, setTitle] = useState('')
  const [results, setResults] = useState<Results[]>([])
  const navigate = useNavigate()
  console.log(results)
  console.log(title)

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    fetch(`https://www.omdbapi.com/?s=${title}&apikey=${apiKey}`)
      .then(res => res.json())
      .then(data => {
        if(data.Search){
        setResults(data.Search)
        }else{
        setResults([])
        console.log('result not found')
        }
      })
  }

  const handleCardClick = (id: string) => {
    navigate(`/movie/${id}`)

  }

  return (
    <StyledSearchPage>
      <form onSubmit={handleSubmit}>
        <StyledSearchBar>
          <input type="text" onChange={handleOnChange}/>
          <button type="submit">Search Movies</button>
        </StyledSearchBar>
      </form>
      {results.length > 0 && 
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
      
    </StyledSearchPage>
    
  )
}