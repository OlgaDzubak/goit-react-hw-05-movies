import { useFetchMovieReviews } from '../../hooks/useFetchMovieReviews';
import ReviewsItem from '../ReviewsItem/ReviewsItem';
import Loader from '../Loader/Loader';
import { nanoid } from 'nanoid';
import css from './reviews.module.css';

//===================================================================================
const Reviews = () => {

    const { movieReviews, isLoading, error} = useFetchMovieReviews();
    
    return (
        <div>
            <ul className={css.ulReviews}>
                { movieReviews.map((item) => <ReviewsItem name={item.author} review={item.content} key={nanoid()}/>) }
            </ul> 
            { isLoading && <Loader/>}
            { error && <p>{error}</p> }
        </div>
    )
}

export default Reviews;
//===================================================================================