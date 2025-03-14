
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"

export const CardDetails = () => {  
  const { id } = useParams();
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [movieDetails, setMovieDetails] = useState<any>([])

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`)
      .then((res) => res.json())
      .then((data) => {
        setMovieDetails(data)
        console.log(data)
      })
  }, [id])

  return (
    <>
    {movieDetails.length === 0 
    ? 
    <p>Loading...</p> 
    :
    <div>
      <h1>{movieDetails.Title}</h1>
      <h1>{movieDetails.Plot}</h1>
    </div>
}
</>)
}
    