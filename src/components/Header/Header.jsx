import { NavLink, useLocation } from "react-router-dom";
import { paths } from 'routes';
import css from "./header.module.css";
import {useState, useEffect} from 'react';

//===============================================================================================
const Header = () => {

    const [color1, setColor1] = useState();
    const [color2, setColor2]= useState();

    const location= useLocation().pathname;
    
    useEffect(()=>{
        if (location === paths.HOME) {
            setColor1({color: "red"});
            setColor2({color: "black"});
        }else{
            setColor1({color: "black"});
            setColor2({color: "red"});
    };
    },[location]);
   
    return (
        <>
            <header className={css.header}>
                <div className='container'>
                    <nav className={css.nav} >
                        <NavLink to={paths.HOME} end className={css.navLink} style={color1}>Home</NavLink>
                        <NavLink to={paths.MOVIES}   className={css.navLink} style={color2}>Movies</NavLink>
                    </nav>
                </div>
            </header>

        </>
    )
}

export default Header;
//================================================================================================