import "./InstructionSignals.scss";

export default function InstructionSignals() {

    return <div className="instruction">
        <div className="instruction-container">
            <h1>How is working?</h1>
            <div className="step">
                <img src="/images/isPair.png" alt="" />
                <div className="step-text">
                    <p className="title">1. Select a pair</p>
                    <p className="desc">Select the asset you want to trade now</p>
                </div>
            </div>
            <div className="step">
                <img src="/images/isTime.png" alt="" />
                <div className="step-text">
                    <p className="title">2. Select a time</p>
                    <p className="desc">Set the time frame for chart analysis</p>
                </div>
            </div>
            <div className="step">
                <img src="/images/isActivate.png" alt="" />
                <div className="step-text">
                    <p className="title">3. Activate</p>
                    <p className="desc">Fund your account to unlock signals</p>
                </div>
            </div>
        </div>
    </div>
}