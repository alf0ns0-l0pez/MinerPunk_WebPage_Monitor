import { useState } from 'react';
import './OverView.css'
import BoardRelay from './BoardRelay';
import BoardStepperMotor from './BoardStepperMotor';

const FactoryExample = [
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 1, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM1' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 2, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM2' },
    { 'BOARDTYPE': 'STEPPER MOTOR SERIAL', 'DESCRIPTION': 'Stepper Controller', 'ID': 3, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM3' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 4, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM4' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 5, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM5' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 6, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM6' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 7, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM7' },
    { 'BOARDTYPE': 'STEPPER MOTOR SERIAL', 'DESCRIPTION': 'Stepper Controller', 'ID': 8, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM8' },
    { 'BOARDTYPE': 'STEPPER MOTOR SERIAL', 'DESCRIPTION': 'Stepper Controller', 'ID': 9, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM9' },
    { 'BOARDTYPE': 'STEPPER MOTOR SERIAL', 'DESCRIPTION': 'Stepper Controller', 'ID': 10, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM10' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 11, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM11' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 12, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM12' },
    { 'BOARDTYPE': 'RELAY MATRIX SERIAL', 'DESCRIPTION': 'Computer Power Switch', 'ID': 13, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM13' },
    { 'BOARDTYPE': 'STEPPER MOTOR SERIAL', 'DESCRIPTION': 'Stepper Controller', 'ID': 14, 'IPADDRESS': 'LOCALHOST', 'PORT': 3030, 'SERIALNAME': 'COM14' },
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
                        return {
                            'RELAY MATRIX SERIAL': <li key={index}><BoardRelay board={board} /></li>,
                            'STEPPER MOTOR SERIAL': <li key={index}><BoardStepperMotor board={board}/></li>
                        }[board.BOARDTYPE]

                    }
                    )
                }

            </ul>
        </div>
    );
}