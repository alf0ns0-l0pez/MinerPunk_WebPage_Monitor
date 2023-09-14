import './NavBar.css'
export default function NavBar(props) {
    const { setNavValue } = props;
    return (
        <div className='navbar'>
            <ul className='nav'>
                <li className='nav' onClick={()=>setNavValue('Overview')}>
                    Overview
                </li>
                <li className='nav' onClick={()=>setNavValue('Stats')}>
                    Stats
                </li>
                <li className='nav' onClick={()=>setNavValue('Settings')}>
                    Settings
                </li>
                <li className='letters-logo'>
                    <img src=".\images\lettersMinerPunkLogo.svg" alt="Miner Punk Letters" height='100%' />
                </li>
                <li className='right'>
                    <img src=".\images\minerPunkLogoOra.svg" alt="Miner Punk Logo" height='100%' />
                </li>
            </ul>
        </div>

    );
}