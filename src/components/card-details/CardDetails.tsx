
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom"
import { LoadingIcon } from "../loading-icon/LoadingIcon";
import { ContentInfo } from "../content-info/ContentInfo";
import { CardDetailsType } from "./types";
import { StyledCardDetails } from "./style";
import { StyledRedButton } from "../style";

export const CardDetails = () => {  
  const { id } = useParams();
  const navigate = useNavigate()
  const apiKey = import.meta.env.VITE_OMDB_API_KEY;
  const [cardDetails, setCardDetails] = useState<CardDetailsType | null>(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchCardDetails = async () => {
      setLoading(true); // starts loading before fetching data
      try {
        const response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=${apiKey}`);
        const data = await response.json();
        setCardDetails({
          Title: data.Title,
          Year: data.Year,
          Actors: data.Actors,
          Awards: data.Awards,
          Country: data.Country,
          Director: data.Director,
          Plot: data.Plot,
          Poster: data.Poster,
          Runtime: data.Runtime
        });
      } finally {
        setLoading(false); // stops loading after the data is fetched
      }
    };
    fetchCardDetails();
  }, [id])
  
  const handleBackToSearchPage = () => {
    navigate(`/`) // goes back to search page
  }
    return (
    <>
      {loading ? <LoadingIcon />
      :
      <StyledCardDetails>
        <ContentInfo cardDetails={cardDetails}/>
        <StyledRedButton>
          <button onClick={handleBackToSearchPage} >Go back to search page</button>
        </StyledRedButton>
      </StyledCardDetails>
      }
    </>
    )
  }
    