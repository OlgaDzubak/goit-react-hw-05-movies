import { Link } from 'react-router-dom';
import {GoArrowLeft} from 'react-icons/go';
import css from './goBackBtn.module.css';
import PropTypes from 'prop-types';

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

GoBackBtn.propTypes = {
    path : PropTypes.object,
}