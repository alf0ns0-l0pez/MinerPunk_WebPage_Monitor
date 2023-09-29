import './NavBar.css'
export default function NavBar() {
    return (
        <nav id='nav'>
            <ul >
                <li>
                    <a href='/#'>Overview</a>
                </li>
                <li>
                    <a href='/#'>Stats</a>
                </li>
                <li>
                    <a href='/#'>Settings</a>
                </li>
                <li >
                    <img src=".\images\minerPunkLogoOra.svg" alt="Logo" height='40px' />
                    <img src=".\images\lettersMinerPunkLogo.svg" alt="Letters" height='40px' />
                </li>
            </ul>
        </nav>

    );
}