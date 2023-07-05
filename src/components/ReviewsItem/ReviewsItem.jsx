import css from './reviewsItem.module.css';

//===================================================================================
const ReviewsItem = ({name='Unknown author', review='No review'}) => {
    
    return (
        <li>
            <p className={css.authorTitle}>Author : {name}</p>
            <p className={css.review}>{review}</p>
        </li>
    );
}

export default ReviewsItem;
//===================================================================================