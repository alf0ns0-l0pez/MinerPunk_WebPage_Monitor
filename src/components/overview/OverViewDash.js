import './OverView.css'
import { FACTORIES_LIST_EXAMPLE } from '../Utils/Constants'
export default function OverViewDash(props) {
    const { setFactoryName } = props;
    return (
        <div id='overview'>
            <ul >
                {
                    FACTORIES_LIST_EXAMPLE.map((factoryName, index) => <li>
                        <ul key={index}>
                            <li>
                                <img src=".\images\sideLogo.svg" alt="Logo" height='40px' />
                            </li>
                            <li>
                                <h2>{factoryName}</h2>
                            </li>
                            <li>
                                <img onClick={() => setFactoryName(factoryName)} 
                                    className='open-door'
                                    src=".\images\openDoor.svg" alt="Logo" height='40px' />
                            </li>
                        </ul>
                    </li>)
                }
            </ul>
        </div>

    );
}