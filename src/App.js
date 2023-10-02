import { useState } from 'react';
import './index.css';
import NavBar from './components/NavBar/NavBar';
import HeadDash from './components/NavBar/HeadDash';
import OverViewDash from './components/OverView/OverViewDash';
import BoardDash from './components/OverView/BoardDash';

export default function App() {
    const [factoryName, setFactoryName] = useState('')
    return (
        < >
            <NavBar/>
            <HeadDash headView={'complete_view'}/>
            {
                !factoryName?
                <OverViewDash setFactoryName={setFactoryName}/>:
                <BoardDash factoryName={factoryName}/>
            }
        </>
    );
}
