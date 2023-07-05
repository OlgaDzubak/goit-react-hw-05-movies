import css from './cast.module.css';
import { useFetchMovieCast } from '../../hooks/useFetchMovieCast';
import { CastItem } from '../CastItem/CastItem';
import { Loader } from '../Loader/Loader';
import { nanoid } from 'nanoid';

//=================================================================================================================
const Cast = () => {

    const { movieCast, isLoading, error} = useFetchMovieCast();
    
    return (
        <div>

            <ul className={css.ulCast}>
                { movieCast.map((item) => <CastItem photo={item.profile_path} actorName={item.name} character={item.character} key={nanoid()}/>) }
            </ul> 

            { isLoading && <Loader/> }
            { error && <p>{error}</p> }

        </div>
    )
}

export default Cast;
//=================================================================================================================