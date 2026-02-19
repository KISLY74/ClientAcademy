import "./RegisterNow.scss";

export default function RegisterNow() {

    return <section className="section section-register">
        <div className="section-container">
            <div className="content-header">
                <img src="/images/warning.png" alt="" />
                <div className="title-container">
                    <p>Action Required</p>
                    <p>You are not registered in PocketOption yet</p>
                </div>
            </div>
            <button className="btn-register">
                <img src="/images/regNew.png" alt="" />
                <p>Register Now</p>
            </button>
            <p className="text-bottom">Complete registration to access all Pocket Academy features</p>
        </div>
    </section>
}