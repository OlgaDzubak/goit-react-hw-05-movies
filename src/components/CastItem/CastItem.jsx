import css from './castItem.module.css';

export const CastItem = ({photo, actorName='Unknown actor', character='Unknown'}) => {

    return (
        <li>
            <div className={css.castImg_div}>
                { photo 
                    ? <img src={'https://image.tmdb.org/t/p/w500'+ photo} alt={actorName} className={css.castImg}></img> 
                    : <p className={css.noPhoto_p}>There are no photo of {actorName}</p>
                }
            </div>
            <p className={css.actorNameTitle}>{actorName ? actorName : 'Unknown actor'}</p>
            <p className={css.character}>Character : <span>{character ? character : 'Unknown'}</span></p>
        </li>
    );
}