import { Loader } from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import { useFetchTrendingMovies } from '../hooks/useFetchTrendingMovies';

//===========================================================================================
export const Home = () => {

  const {list, isLoading, error} = useFetchTrendingMovies();

  return (
    <main>
      <section>
          { list.length !== 0 && 
              <div className='container'>
                <h1>Trending today</h1>
                <MovieList movies={list} /> 
              </div>
          }
          { isLoading && <Loader/> }
          { error && <p>{error}</p> }
      </section>
    </main>
  );
};

export default Home;
//===========================================================================================