import './index.css';
import NavBar from './components/NavBar/NavBar';
import HeadDash from './components/NavBar/HeadDash';
import OverViewDash from './components/OverView/OverViewDash';
import BoardDash from './components/OverView/BoardDash';
export default function App() {
    return (
        < >
            <NavBar/>
            <HeadDash headView={'complete_view'}/>
            <BoardDash factoryName={'Factory Name'}/>
        </>
    );
}
