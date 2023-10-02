import { useState } from 'react';
import './OverView.css';
export default function BoardRelay(props) {
    const { board } = props;
    const [expandView, setExpandView] = useState(false);
    const [clickNONC, setClickNONC] = useState(false);
    const [clickOpenClose, setOpenClose] = useState(false);

    return (
        <>{

            !expandView ?
                <section className='board-row'>
                    <div className='board-logo'><img src=".\images\relayNormal.svg" alt="Logo" height='40px' /></div>
                    <h2 className='title-board'>{`${board.BOARDTYPE}  #${board.ID} | ${board.DESCRIPTION}`}</h2>
                    <div className='drop-form' onClick={() => setExpandView(true)}>
                        <img src=".\images\hidden.svg" alt="Logo" height='40px' />
                    </div>
                </section>
                :
                <section className='board-relay'>
                    <div className='board-logo'><img src=".\images\relayNormal.svg" alt="Logo" height='40px' /></div>
                    <h2 className='title-board'>{`${board.BOARDTYPE}  #${board.ID} | ${board.DESCRIPTION}`}</h2>
                    <div className='drop-form' onClick={() => setExpandView(false)}>
                        <img src=".\images\show.svg" alt="Logo" height='40px' />
                    </div>
                    <h3 style={{ gridColumn: '2/4' }}>OPTO INPUTS:</h3>
                    <div className='opto-list'>
                        <img src=".\images\optoLedOn.svg" alt="Logo" height='50px' />
                        <img src=".\images\optoLedOn.svg" alt="Logo" height='50px' />
                        <img src=".\images\optoLedOff.svg" alt="Logo" height='50px' />
                        <img src=".\images\optoLedOff.svg" alt="Logo" height='50px' />
                    </div>
                    <h3 style={{ gridColumn: '2/4' }}>RELAY OUTPUTS:</h3>
                    <div className='relay-list'>
                        <img src=".\images\relayClose.svg" alt="Logo" height='50px' />
                        <img src=".\images\relayClose.svg" alt="Logo" height='50px' />
                        <img src=".\images\relayClose.svg" alt="Logo" height='50px' />
                        <img src=".\images\relayClose.svg" alt="Logo" height='50px' />
                        <img src=".\images\relayOpen.svg" alt="Logo" height='50px' />
                        <img src=".\images\relayOpen.svg" alt="Logo" height='50px' />
                        <img src=".\images\relayOpen.svg" alt="Logo" height='50px' />
                        <img src=".\images\relayOpen.svg" alt="Logo" height='50px' />
                    </div>
                    <form>
                        <h3 style={{ gridColumn: '1/3' }}>NO/NC</h3>
                        <h3>Relay No</h3>
                        <h3 style={{ gridColumn: '4/6' }}>State</h3>
                        <h4 style={{
                            gridColumn: '1',
                            textAlign: 'right',
                            lineHeight: '1.5',
                            paddingRight: '3px',
                            backgroundColor: clickNONC ? 'grey' : 'green',
                            borderTopLeftRadius: '6px',
                            borderBottomLeftRadius: '6px'
                        }}
                            onClick={() => setClickNONC(false)}>
                            NO</h4>
                        <h4 style={{
                            gridColumn: '2',
                            paddingLeft: '3px',
                            lineHeight: '1.5',
                            backgroundColor: !clickNONC ? 'grey' : 'green',
                            borderTopRightRadius: '6px',
                            borderBottomRightRadius: '6px'
                        }}
                            onClick={() => setClickNONC(true)}>
                            NC</h4>
                        <input value={1} type='number' min="1" max="8" />
                        <h4 style={{
                            gridColumn: '4',
                            textAlign: 'right',
                            lineHeight: '1.5',
                            paddingRight: '3px',
                            backgroundColor: clickOpenClose ? 'grey' : 'green',
                            borderTopLeftRadius: '6px',
                            borderBottomLeftRadius: '6px'
                        }}
                            onClick={() => setOpenClose(false)}>
                            Open</h4>
                        <h4 style={{
                            gridColumn: '5',
                            paddingLeft: '3px',
                            lineHeight: '1.5',
                            backgroundColor: !clickOpenClose ? 'grey' : 'green',
                            borderTopRightRadius: '6px',
                            borderBottomRightRadius: '6px'
                        }}
                            onClick={() => setOpenClose(true)}>
                            Close</h4>
                    </form>
                    <h3 style={{ gridColumn: '2/4' }}>CONNECTION DETAILS:</h3>
                    <div className='board-details'>
                        <p>Ip Address :<spam style={{ color: 'yellow' }}>{board.IPADDRESS}</spam></p>
                        <p>Port :<spam style={{ color: 'yellow' }}>{board.PORT}</spam></p>
                        <p>Serial Name :<spam style={{ color: 'yellow' }}>{board.SERIALNAME}</spam></p>
                    </div>
                </section>
        }
        </>
    );
}