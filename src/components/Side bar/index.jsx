import './index.scss'
import {Link, NavLink} from "react-router-dom";
import LogoS from "../../assets/images/logo-s.png";
import LogoSubtitle from "../../assets/images/logo_sub.png";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope, faHome, faUser} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub, faLinkedin} from "@fortawesome/free-brands-svg-icons";

const SideBar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo"/>
            <img className="sub-logo" src={LogoSubtitle} alt="logo subtitle"/>
        </Link>
        <nav>
            <NavLink
                exact="true"
                to="/"
                activeclassname="active">
                <FontAwesomeIcon icon={faHome}
                                 color="#4d4d4e"/></NavLink>
            <NavLink
                exact="true"
                to="/about"
                className="about-link"
                activeclassname="active">
                <FontAwesomeIcon
                icon={faUser}
                color="#4d4d4e"/>
            </NavLink>
            <NavLink
                exact="true"
                to="/contact"
                className="contact-link"
                activeclassname="active">
                <FontAwesomeIcon
                icon={faEnvelope}
                color="#4d4d4e"/>
            </NavLink>
        </nav>
        <ul>
            <li>
                <a target="_blank" rel="noreferrer" href=""><FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/> </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href="https://github.com/marius1one"><FontAwesomeIcon icon={faGithub} color="#4d4d4e"/> </a>
            </li>
            <li>
                <a target="_blank" rel="noreferrer" href=""><FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/> </a>
            </li>
        </ul>
    </div>

);


export default SideBar;