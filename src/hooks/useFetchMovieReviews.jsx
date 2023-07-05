import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieReviews } from '../service/movie-service';

export const useFetchMovieReviews=() => {

    const [movieReviews, setMovieReviews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId: id} = useParams();

    useEffect(()=>{

          setIsLoading(true);

          const fetchData = async () => {

            try {   
                  const result = await fetchMovieReviews(id);
                  if (result.length === 0) {setError("We don't have any reviews for this movie.");}
                  setMovieReviews(result);
                }
            catch (error) { setError(error); } 
            finally { setIsLoading(false); }
          }
          fetchData();

    }, [id])
    
    return {
      movieReviews,
      isLoading,
      error,
    }
}