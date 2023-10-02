import { useState } from 'react';
import './OverView.css'
import BoardRelay from './BoardRelay';
import BoardStepperMotor from './BoardStepperMotor';
import {FACTORY_EXAMPLE} from '../Utils/Constants'

export default function BoardDash(props) {
    const { factoryName } = props;
    const [factoryBoards, setFactoryBoards] = useState(FACTORY_EXAMPLE);
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