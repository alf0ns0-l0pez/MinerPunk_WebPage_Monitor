import './OverView.css'
export default function BoardRelay(props) {
    const { board } = props;
    return (
        <section className='board-relay'>
            <div className='board-logo'><img src=".\images\relayNormal.svg" alt="Logo" height='40px' /></div>
            <h2 className='title-board'>{`${board.BOARDTYPE}  #${board.ID} | ${board.DESCRIPTION}`}</h2>
            <div className='drop-form'><img src=".\images\relayNormal.svg" alt="Logo" height='40px' /></div>
            <div className='relay-list'>
                <h1 style={{ borderColor: 'red' }}>1</h1>
                <h1 style={{ borderColor: 'red' }}>2</h1>
                <h1 style={{ borderColor: 'green' }}>3</h1>
                <h1 style={{ borderColor: 'green' }}>4</h1>
                <h1 style={{ borderColor: 'red' }}>5</h1>
                <h1 style={{ borderColor: 'red' }}>6</h1>
                <h1 style={{ borderColor: 'green' }}>7</h1>
                <h1 style={{ borderColor: 'red' }}>8</h1>
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
                    backgroundColor: 'red',
                    borderTopLeftRadius: '6px',
                    borderBottomLeftRadius: '6px'
                }}>
                    NO</h4>
                <h4 style={{
                    gridColumn: '2',
                    paddingLeft: '3px',
                    lineHeight: '1.5',
                    backgroundColor: 'green',
                    borderTopRightRadius: '6px',
                    borderBottomRightRadius: '6px'
                }}>
                    NC</h4>
                <input type='number' min="1" max="8" />
                <h4 style={{
                    gridColumn: '4',
                    textAlign: 'right',
                    lineHeight: '1.5',
                    paddingRight: '3px',
                    backgroundColor: 'red',
                    borderTopLeftRadius: '6px',
                    borderBottomLeftRadius: '6px'
                }}>
                    Open</h4>
                <h4 style={{
                    gridColumn: '5',
                    paddingLeft: '3px',
                    lineHeight: '1.5',
                    backgroundColor: 'green',
                    borderTopRightRadius: '6px',
                    borderBottomRightRadius: '6px'
                }}>
                    Close</h4>
            </form>
            <div className='board-details'> 
                <p>{`Ip Address : ${board.IPADDRESS}`}</p>
                <p>{`Port : ${board.PORT}`}</p>
                <p>{`Serial Name : ${board.SERIALNAME}`}</p>
            </div>
        </section>
    );
}