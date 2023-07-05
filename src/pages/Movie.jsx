import { useRef, Suspense } from 'react';
import  MovieInfo from '../components/MovieInfo/MovieInfo';
import  Loader from '../components/Loader/Loader';
import  GoBackBtn from '../components/GoBackBtn/GoBackBtn';
import { useFetchMovieDetails } from '../hooks/useFetchMovieDetails';
import { useLocation, Outlet } from 'react-router-dom';
import { paths } from '../routes';

//===========================================================================================
const Movie = () => {
  
    const {movieDetails, isLoading, error} = useFetchMovieDetails();
    const {id, title, poster_path, genres, overview, release_date, vote_average} = movieDetails;
    const full_poster_path = poster_path ? 'https://image.tmdb.org/t/p/w500/' + poster_path : poster_path;
    const release_year = release_date ? '('+new Date(release_date).getFullYear()+')' : release_date;

    const location = useLocation();
    const refLocation = useRef(location?.state?.from ?? paths.HOME);
   
    return (
        <main>
            <section>
                <div className='container'>
                    <GoBackBtn path={refLocation.current}>Go back!</GoBackBtn>
                    <MovieInfo  id = {id}
                                title ={title}
                                poster_path = {full_poster_path}
                                release_year = {release_year}
                                overview = {overview}
                                genres = {genres}
                                vote_average = {vote_average}
                    />
                    { isLoading && <Loader/> }
                    { error && <p>error</p> }

                    <Suspense fallback={<div>Loadding...</div>}>
                        <Outlet/>
                    </Suspense>
                </div>
            </section>
        </main>
  );
};

export default Movie;
//===========================================================================================