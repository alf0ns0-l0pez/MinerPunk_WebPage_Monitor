import './OverView.css'
export default function BoardStepperMotor(props) {
    const { board } = props;
    return (
        <section className='board-motor'>
            <div className='board-logo'><img src=".\images\motorNormal.svg" alt="Logo" height='40px' /></div>
            <div className='drop-form'><img src=".\images\relayNormal.svg" alt="Logo" height='40px' /></div>
        </section>
    );
}