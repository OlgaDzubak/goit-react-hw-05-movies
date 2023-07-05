import {useEffect, useState} from 'react';
import {getTrendingMovies} from '../service/movie-service';
import {transformMoviesData} from '../helpers/transformMoviesData';

export const useFetchTrendingMovies = () => {
    
    const [list, setList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);


  useEffect(()=>{
    
    setIsLoading(true);

    const fetchData = async () => {
      try {
              const result = await getTrendingMovies();
              const movieList = transformMoviesData(result);
              if (movieList.length === 0) setError("Oops! Somethig went wrong! Try reload the page!");
              setList(movieList);
          }
      catch (error) {setError(error)}
      finally {setIsLoading(false)}
    }
    fetchData()
   
  }, [])

  
  return {
    list,
    isLoading,
    error,
  }
}