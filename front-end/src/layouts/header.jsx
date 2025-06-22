import NavBar from "../components/Navbar"
import Logo from '../assets/img/logo.svg'

export default function Header () {
    return (
        <header>
            <img src={Logo} alt="Logo" />
            <NavBar />
        </header>
    )
}