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
                <div className="signal-container">
                    <div className="signal-header">
                        <div className="pair-icons">
                            <img src={`/images/currencyIcons/${pair.slice(0, 3).toLowerCase()}Icon.png`} alt="" />
                            <img src={`/images/currencyIcons/${pair.slice(-3).toLowerCase()}Icon.png`} alt="" />
                        </div>
                        <p className="currency-pair">{pair}</p>
                        <p className="signal-header__time">{time}</p>
                    </div>

                    <div className="signal-middle">
                        <div className="left">
                            <p>Direction</p>
                            <div className="left-res">
                                <img src="/images/buy.png" alt="" />
                                <p className="buy">BUY</p>
                            </div>
                        </div>
                        <div className="right">
                            <p>Probability</p>
                            <div className="right-res">
                                <p>94%</p>
                                <img src="/images/checkmark.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="signal-footer">
                        <div className="progress">
                            <div className="progress-fill" style={{width: "94%"}}></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    </div>
}