import React, {useContext} from "react";
import styles from "./Header.module.scss";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import iconMap from "../../assets/images/map-icon.png";
import iconPerfil from "../../assets/images/perfil-icon.png";
import { userContext } from "../../App";


const Header = () => {
    const { isLogged } = useContext(userContext);

    const headerOptions = isLogged ? 
    (<ul className="navbar-nav mr-auto">
        <li className={`nav-item actived ${styles.option}`}>
            <Link className="nav-link" to="/generateMap">Criar mapa</Link>
        </li>
        <li className={`nav-item ${styles.option}`}>
            <Link className="nav-link" to="/home">Coleção de Mapas</Link>
        </li>
    </ul>)
    : 
    (<ul className="navbar-nav mr-auto">
        <li className={`nav-item actived ${styles.option}`}>
            <Link className="nav-link" to="/">Cadastro</Link>
        </li>
        <li className={`nav-item ${styles.option}`}>
            <Link className="nav-link" to="/about">Sobre</Link>
        </li>
    </ul>) 

    const userOptions = isLogged ?
    (<img className={styles.icon} src={iconPerfil}/>)
    :
    (<Link to="/login">
        <Button text="Entrar" grayDark />
    </Link>)

    return (
        <nav className={`${styles.nav} navbar navbar-expand-lg navbar-light`}>
            <div className={styles.bodyHeader}>
                <div className={styles.leftHeader}>
                    <a className="navbar-brand" href="/#">
                        <img src={iconMap} alt="_" />
                        Quaesitum GIS
                    </a>
                    {headerOptions}
                </div>
                <div className={styles.rightHeader}>
                    <div className={styles.btnArea}>
                        {userOptions}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Header;