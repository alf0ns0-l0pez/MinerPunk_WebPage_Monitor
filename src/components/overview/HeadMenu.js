import './Overview.css'
export default function HeadMenu() {
    return (
        <div >
            <ul className='head'>
                <li className='head'>
                    <p className='value'>3</p>
                    <p className='title'>Sites</p>
                </li>
                <li className='head'>
                    <p className='value'>10</p>
                    <p className='title'>Computers</p>
                </li>
                <li className='head'>
                    <p className='value'>8</p>
                    <p className='title'>Online</p>
                </li>
                <li className='head'>
                    <p className='value'>2</p>
                    <p className='title'>Offline</p>
                </li>
            </ul>
        </div>

    );
}