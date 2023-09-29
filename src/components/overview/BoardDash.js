import { useState } from 'react';
import './OverView.css'
import BoardRelay from './BoardRelay';
import BoardStepperMotor from './BoardStepperMotor';

const FactoryExample = [
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 1, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME':'COM6' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 2, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME':'COM6' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 3, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME':'COM6' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 4, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME':'COM6' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 5, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME':'COM6' },
];

export default function BoardDash(props) {
    const { factoryName } = props;
    const [factoryBoards, setFactoryBoards] = useState(FactoryExample);
    return (
        <div id='overview'>
            <ul >
                <li>
                    <section className='header-factory'>
                        <div className='board-logo'><img src=".\images\sideLogo.svg" alt="Logo" height='40px' /></div>
                        <h2 className='title-factory'>{factoryName}</h2>
                    </section>
                </li>
                {
                    factoryBoards.map((board, index) => {
                        return <li key={index}>
                            <BoardRelay board={board}/>
                        </li>
                    }
                    )
                }
                <li>
                    <BoardStepperMotor/>
                </li>
            </ul>
        </div>
    );
}