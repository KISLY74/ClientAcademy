import { useEffect, useState } from "react";
import { getUserStatus } from "../../api/user.api.js";
import "./StatusProgress.scss";

const LEVELS = [
    { name: "novice", min: 0, max: 50 },
    { name: "trader", min: 50, max: 150 },
    { name: "professional", min: 150, max: 300 },
    { name: "expert", min: 300, max: 1000 },
    { name: "master", min: 1000, max: 5000 },
    { name: "legend", min: 5000, max: 5000 },
];

export default function StatusProgress({ tgId }) {
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!tgId) return;

        const fetchStatus = async () => {
            try {
                const data = await getUserStatus(tgId);
                setStatus(data);
            } catch (e) {
                console.error("Status fetch error:", e);
            } finally {
                setLoading(false);
            }
        };

        fetchStatus();
    }, [tgId]);

    if (loading) return <div className="status-progress"><p>Loading...</p></div>;
    if (!status) return null;

    const current = LEVELS.find(l => l.name === status.status);
    const isLegend = status.status === "legend";

    const progress = isLegend ? 100 : Math.min(
        ((status.total - current.min) / (current.max - current.min)) * 100,
        100
    );

    return (
        <div className="status-progress">
            <div className="status-progress__container">
                <div className="status-header">
                    <p className="status-name">{status.status.toUpperCase()}</p>
                    <p className="status-total">${status.total}</p>
                </div>
                <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${progress}%` }}></div>
                </div>
            </div>
        </div>
    );
}