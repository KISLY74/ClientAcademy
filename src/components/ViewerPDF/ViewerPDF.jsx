import "./ViewerPDF.scss"

export default function ViewerPDF({url}) {
    return <div className="viewer">
        <div className="viewer-container">
            <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <iframe
                    src={url}
                    width="100%"
                    height="100%"
                    allowFullScreen
                    style={{ border: "none", display: "block" }}
                />
                <div style={{
                    position: "absolute",
                    top: 0,
                    right: 0,
                    width: "60px",
                    height: "60px",
                    // background: "#1a1a1a",
                    zIndex: 10,
                }} />
            </div>
        </div>

    </div>
}
