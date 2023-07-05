import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieDetails } from '../service/movie-service';;

export const useFetchMovieDetails=() => {

    const [movieDetails, setMovieDetails] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId: id} = useParams();

    useEffect(()=>{

          setIsLoading(true);

          const fetchData = async () => {
            try {   
                    const result = await fetchMovieDetails(id);
                    setMovieDetails(result);
                }
            catch (error) { setError(error); } 
            finally { setIsLoading(false); }
          }
          fetchData();

    }, [id])

    return {
      movieDetails,
      isLoading,
      error,
    }
}