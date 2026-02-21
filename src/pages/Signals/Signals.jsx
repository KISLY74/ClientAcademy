import { useState } from "react";
import Footer from "../../components/Footer/Footer"
import "./Signals.scss"

export default function Signals() {
    const [time, setTime] = useState('1m')
    const [pair, setPair] = useState('EUR/USD')
    const times = ["1m", '5m', '10m', '30m']
    const pairs = ["EUR/USD", 'GBP/USD', 'USD/JPY', 'EUR/CHF']

    const handlePairClick = (p) => setPair(p)
    const handleTimeClick = (t) => setTime(t)

    return <div className="signals">
        <div className="signals-container">
            <div className="pairs">
                <p>Currency pair</p>
                <div className="pairs-content">
                    {pairs.map(p => <p key={p} className={p === pair ? "pair active" : "pair"} onClick={() => handlePairClick(p)}>{p}</p>)}
                </div>
            </div>

            <div className="times">
                <p>Time</p>
                <div className="times-content">
                    {times.map(t => <p key={t} className={t === time ? "time active" : "time"} onClick={() => handleTimeClick(t)}>{t}</p>)}
                </div>
            </div>

            <div className="signal">
                <div className="signal-header">
                    {/* <img src="" alt="" />  // иконка верх/вниз*/}

                </div>


                <></>

            </div>
            <Footer />
        </div>
    </div>
}