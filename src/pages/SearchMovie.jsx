import SearchForm from '../components/SearchForm/SearchForm';
import Loader from '../components/Loader/Loader';
import MovieList from '../components/MovieList/MovieList';
import {useFetchSearch} from '../hooks/useFetchSearch';

  //===========================================================================================
  const SearchMovie = () => {

    const { list, isLoading, error, onChangeParams} = useFetchSearch();
    
    return (
      <main>
          <section>
            <div className='container'>

                <SearchForm onSubmit={onChangeParams}/>

                {list.length!==0 && <MovieList movies={list}/>}

                { isLoading && <Loader/> }

                { error && <p>error</p> }

            </div>
          </section>
        </main>
    );
  };
  
  export default SearchMovie;
  //===========================================================================================