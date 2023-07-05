import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { paths } from '../routes';
import SharedLayout  from './SharedLayout/SharedLayout';

const Home = lazy(()=>import('../pages/Home'));
const SearchMovie = lazy(()=>import('../pages/SearchMovie'));
const Movie = lazy(()=>import('../pages/Movie'));
const Cast = lazy(()=>import('./CastList/Cast'));
const Reviews = lazy(()=>import('./ReviewsList/Reviews'));

//===========================================================================================

const App = () => {

    return (
        <Routes>
            <Route path={paths.HOME} element={<SharedLayout/>}>
                <Route index element={<Home />} />
                <Route path={paths.HOME} element={<Home/>}/>
                <Route path={paths.MOVIES} element={<SearchMovie/>}/>
                <Route path={paths.MOVIES_MOVIE_ID} element={<Movie/>}>
                    <Route path={paths.MOVIE_CAST} element={<Cast/>}/>
                    <Route path={paths.MOVIE_REVIEWS} element={<Reviews/>}/>
                </Route>
            </Route>
        </Routes>
     );
};

export default App;
//===========================================================================================