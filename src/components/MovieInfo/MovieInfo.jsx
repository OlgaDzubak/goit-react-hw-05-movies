import { NavLink } from 'react-router-dom';
import { paths } from '../../routes';
import css from './movieInfo.module.css';


//===========================================================================================
const MovieInfo = ({
    id, 
    title='No title',
    poster_path,
    release_year,
    overview='There ara no overview',
    genres=[],
    vote_average = 0}) => {
    
    return (
             <>
                <div className={css.movieDetails}>
                    
                    <div className={css.imgPoster_div}>
                       { poster_path 
                            ? <img src={poster_path} alt={title} className={css.imgPoster}></img> 
                            : <p className={css.noPoster_p}>There are no poster for this movie</p>
                       }
                    </div>

                    <div className={css.movieInfoText}>
                        <h2 className={css.title}>{title} <span className={css.release_year}>{release_year}</span></h2>

                        <p className={css.userScore}>User score:<span className={css.userScoreRating}> {Math.round(vote_average*10,0)}%</span></p>

                        <p className={css.overViewTitle}>Overview</p>
                        <p className={css.overView}>{overview}</p>

                        <p className={css.GenresTitle}>Genres</p>
                        <p className={css.Genres}>{genres.map(item => item.name).join(', ')}</p>
                    </div>
                </div>

                <div className={css.addInf_div}>
                    <p className={css.addInf_p}> Additional information</p>
                    <ul>
                        <li><NavLink to={`${paths.MOVIES}/${id}/cast`} className={css.navLink} >Cast</NavLink></li>
                        <li><NavLink to={`${paths.MOVIES}/${id}/reviews`} className={css.navLink} >Reviews</NavLink></li>
                    </ul>
                </div>                
              </>
    )
};

export default MovieInfo;
//===========================================================================================