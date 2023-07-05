import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { searchMovie } from '../service/movie-service';
import { transformMoviesData} from '../helpers/transformMoviesData';

export const useFetchSearch=() => {

  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(()=>{

    const search_word = searchParams.get('query')

    setIsLoading(true);

    const fetchData = async () => {
      try 
        {
            const result = await searchMovie(search_word);
            const movieList = transformMoviesData(result);
            setList(movieList);
        } 
      catch (error) { setError(error); } 
      finally { setIsLoading(false) }
    }
    fetchData();

  }, [searchParams])

  const onChangeParams = (query) => setSearchParams({query}); 

  return {
    list,
    isLoading,
    error,
    onChangeParams,
  }
}