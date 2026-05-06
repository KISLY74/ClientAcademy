import { useEffect, useState } from "react";
import Footer from "../../components/Footer/Footer"
import InstructionSignals from "../../components/InstructionSignals/InstructionSignals";
import { useContext } from "react";
import { TgContext } from "../../context/TgContext.js";
import { getSignalConfig, generateSignal } from "../../api/signal.api.js";
import "./Signals.scss"

export default function Signals() {
    const { tgId } = useContext(TgContext);

    const [config, setConfig] = useState(null);
    const [loading, setLoading] = useState(true);
    const [time, setTime] = useState(null);
    const [pair, setPair] = useState(null);
    const [isWait, setIsWait] = useState(false);
    const [signal, setSignal] = useState({ direction: null, prob: "XX" });
    const [signalsUsed, setSignalsUsed] = useState(0);
    const [error, setError] = useState(null);

    const handleGetSignal = async () => {
        if (!tgId || !pair || !time || isWait) return;

        setError(null);
        setIsWait(true);

        try {
            const data = await generateSignal(tgId, pair, time);

            if (data.error === "limit_reached") {
                setError({
                    type: "limit_reached",
                    toNextStatus: data.to_next_status,
                    limit: data.signals_limit,
                });
                setIsWait(false);
                return;
            }

            if (data.error === "too_early") {
                setError({
                    type: "too_early",
                    secondsLeft: data.seconds_left,
                });
                setIsWait(false);
                return;
            }

            setTimeout(() => {
                setSignal({ direction: data.direction, prob: data.prob });
                setSignalsUsed((prev) => prev + 1);
                setIsWait(false);
            }, data.wait_sec * 1000);

        } catch (e) {
            console.error("Generate signal error:", e);
            setIsWait(false);
        }
    };

    const handleLinkDeposit = () =>{

        window.open('https://pocketoption.com/en/cabinet/deposit-step-1/', '_blank')

    }

    useEffect(() => {
        if (!tgId) return;

        const fetchConfig = async () => {
            try {
                const data = await getSignalConfig(tgId);
                // if (!data.exists) return;

                setConfig(data);
                setSignalsUsed(data.signals_used);
                setPair(data.pairs[0]);
                setTime(data.timeframes[0]);
            } catch (e) {
                console.error("Config fetch error:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchConfig();
    }, [tgId]);
    if (loading) return <div className="signals"><p>Loading...</p></div>;
    // if (!config) return <div className="signals"><p>Error loading config</p></div>;
    let limitReached = false

    if (config) {
        limitReached = config.signals_limit !== null && signalsUsed >= config.signals_limit;
    }
    return <div className="signals">
        <div className="signals-container">
            <div className="signals-counter">
                <p>{signalsUsed} / {config.signals_limit ?? "∞"} signals today</p>
            </div>
            <div className="pairs">
                <p>Currency pair</p>
                <div className="pairs-content">
                    {config.pairs.map(p => (
                        <p key={p} className={p === pair ? "pair active" : "pair"} onClick={() => setPair(p)}>{p}</p>
                    ))}
                </div>
            </div>

            <div className="times">
                <p>Time</p>
                <div className="times-content">
                    {config.timeframes.map(t => (
                        <p key={t} className={t === time ? "time active" : "time"} onClick={() => setTime(t)}>{t}</p>
                    ))}
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
                            {signal.prob === "XX" ? <div className="left-res">
                                <img src={`/images/buy.png`} alt="" />
                                <img src={`/images/sell.png`} alt="" />
                            </div>
                                : <div className="left-res">
                                    <img src={`/images/${signal.direction ? "buy" : "sell"}.png`} alt="" />
                                    {signal.direction ? <p className="buy">BUY</p> : <p className="sell">SELL</p>}
                                </div>}
                        </div>
                        <div className="right">
                            <p>Probability</p>
                            <div className="right-res">
                                <p>{signal.prob}%</p>
                                {signal.prob !== "XX" ? <img src="/images/checkmark.png" alt="" /> : ""}
                            </div>
                        </div>
                    </div>

                    <div className="signal-footer">
                        <div className="progress">
                            <div className="progress-fill" style={{ width: `${signal.prob === "XX" ? "0%" : signal.prob + "%"}` }}></div>
                        </div>
                    </div>
                </div> : <div className="signal-container wait">

                    <div className="spinner"></div>

                    <p className="title-text">Generation signal...</p>
                    <p className="desc-text">Please wait {config.wait_sec} seconds</p>

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

                {error?.type === "limit_reached" && (
                    <div className="signal-error">
                        <p>Daily limit reached ({error.limit}/{error.limit})</p>
                        {error.toNextStatus && (
                            <p>Deposit ${error.toNextStatus.needed} more to become {error.toNextStatus.next}</p>
                        )}
                    </div>
                )}

                {error?.type === "too_early" && (
                    <div className="signal-error">
                        <p>Wait {error.secondsLeft} seconds before next signal</p>
                    </div>
                )}
                    
                {limitReached ? (
                    <button className="get-signal disabled" disabled>LIMIT REACHED</button>
                ) : !config.exist ? (
                    <button className="get-signal not-exist" onClick={handleLinkDeposit}>Top up $10 to unlock</button>
                ) : isWait ? (
                    <button className="get-signal wait" disabled>GET SIGNAL...</button>
                ) : (
                    <button className="get-signal" onClick={handleGetSignal}>GET SIGNAL</button>
                )}

            </div>
            <InstructionSignals />
            <Footer />
        </div>
    </div>
}