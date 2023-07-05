import { NavLink } from "react-router-dom";
import { paths } from 'routes';
import css from "./header.module.css"

//===============================================================================================
const Header = () => {

    return (
        <>
            <header className={css.header}>
                <div className='container'>
                    <nav className={css.nav}>
                        <NavLink to={paths.HOME} end className={css.navLink}>Home</NavLink>
                        <NavLink to={paths.MOVIES} className={css.navLink}>Movies</NavLink>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header;
//================================================================================================