import { Link } from 'react-router-dom';
import {GoArrowLeft} from 'react-icons/go';
import css from './goBackBtn.module.css';

//=============================================================================
const GoBackBtn = ({ path, children }) => {

    return  (
            <Link to={path} className={css.btnLink}>
                <GoArrowLeft/>
                {children}
            </Link>
    )
}

export default GoBackBtn;
//=============================================================================