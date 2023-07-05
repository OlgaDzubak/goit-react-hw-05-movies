import { Link, useLocation } from 'react-router-dom';
import { paths } from '../../routes';
import css from './movieList.module.css';


//===========================================================================================
const MovieList = ({ movies }) => {
    const location = useLocation();

    return (
        <ul  className={css.movieList}>
            {movies.map(({title, id, year}) => {
                return (
                    <li key={id} className={css.movieList_item}>
                        <Link to={`${paths.MOVIES}/${id}`} className={css.link} state={{from : location}}>
                            {title} {year}
                        </Link> 
                    </li>
                )
            })}
        </ul>
    )
};

export default MovieList;
//===========================================================================================