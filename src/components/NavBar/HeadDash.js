import './NavBar.css'
import { HEAD_DASH } from '../Utils/Constants'
export default function HeadDash(props) {
    const { headView } = props;
    return (
        <section id='head-dash'>
            <ul>
                {
                    HEAD_DASH[headView].map((fieldInfo, index) =>
                        <li key={index}>
                            <p>0</p>
                            <p>{fieldInfo.fieldName}</p>
                        </li>
                    )
                }
            </ul>
            <div className='clearfix' />
        </section>

    );
}