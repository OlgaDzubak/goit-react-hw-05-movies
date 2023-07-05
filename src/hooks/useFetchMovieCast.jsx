import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchMovieCast } from '../service/movie-service';

export const useFetchMovieCast=() => {

    const [movieCast, setMovieCast] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const {movieId: id} = useParams();

    useEffect(()=>{

          setIsLoading(true);

          const fetchData = async () => {
            try {   
                    const result = await fetchMovieCast(id);
                    if (result.length === 0) {setError("We don't have any cast list for this movie.");}
                    setMovieCast(result);
                }
            catch (error) { setError(error); } 
            finally { setIsLoading(false); }
          }
          fetchData();

    }, [id])
    
    return {
      movieCast,
      isLoading,
      error,
    }
}