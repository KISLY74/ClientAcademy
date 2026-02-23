import { useState } from "react";
import Footer from "../../components/Footer/Footer"
import "./Signals.scss"

export default function Signals() {
    const [time, setTime] = useState('1m')
    const [pair, setPair] = useState('EUR/USD')
    const [signal, setSignal] = useState({ direction: false, prob: 90 })

    const [access, setAccess] = useState(false);
    const [isWait, setIsWait] = useState(false);

    const times = ["1m", '5m', '10m', '30m']
    const pairs = ["EUR/USD", 'GBP/USD', 'USD/JPY', 'EUR/CHF']

    const handlePairClick = (p) => setPair(p)
    const handleTimeClick = (t) => setTime(t)

    const generateSignal = () => {
        const randomDirection = Math.random() < 0.5;
        const randomProb = Math.floor(Math.random() * (96 - 85 + 1)) + 85;

        setSignal({
            direction: randomDirection,
            prob: randomProb
        });
    };

    const handleGetSignal = () => {
        setIsWait(true)

        setTimeout(() => {
            setIsWait(false)
            generateSignal()
        }, 3000);
    }

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
                {!isWait ? <div className="signal-container">
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
                                <img src={`/images/${signal.direction ? "buy" : "sell"}.png`} alt="" />
                                {signal.direction ? <p className="buy">BUY</p> : <p className="sell">SELL</p>}
                            </div>
                        </div>
                        <div className="right">
                            <p>Probability</p>
                            <div className="right-res">
                                <p>{signal.prob}%</p>
                                <img src="/images/checkmark.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="signal-footer">
                        <div className="progress">
                            <div className="progress-fill" style={{ width: "94%" }}></div>
                        </div>
                    </div>
                </div> : <div className="signal-container wait">

                    <div className="spinner"></div>

                    <p className="title-text">Generation signal...</p>
                    <p className="desc-text">Please wait 2-3 seconds</p>

                    <div className="buy-sell">
                        <div className="buy-content">
                            <img src="/images/buy.png" alt="" />
                            <p>BUY</p>
                        </div>
                        <div className="sell-content">
                            <img src="/images/sell.png" alt="" />
                            <p>SELL</p>
                        </div>
                    </div>
                </div>}

                {isWait ? <button className="get-signal wait">GET SIGNAL...</button> : <button className="get-signal" onClick={handleGetSignal}>GET SIGNAL</button>}
            </div>
            <Footer />
        </div>
    </div>
}