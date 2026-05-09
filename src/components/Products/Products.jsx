import ProductItem from "../ProductItem/ProductItem"
import "./Products.scss"

export default function Products() {

    const products = [
            {
                "id": 1,
                "name": "AI Trading Education",
                "description": "Master trading with AI-powered strategies",
                "price": 30,
                "type": "course",
                "content": null,
                "owned": false,
                "icon": "ai-course"
            },
            {
                "id": 2,
                "name": "Pattern Mastery",
                "description": "Learn chart patterns",
                "price": 49,
                "type": "course",
                "content": null,
                "owned": false,
                "icon": "patterns-icon"
            },
            {
                "id": 3,
                "name": "Indicator Insights",
                "description": "Unlock the power of indicators",
                "price": 69,
                "type": "course",
                "content": null,
                "owned": false,
                "icon": "indicators-icon"
            },
            {
                "id": 4,
                "name": "Trend & Candle Tactics",
                "description": "Decode candlesticks & trends",
                "price": 99,
                "type": "course",
                "content": null,
                "owned": false,
                "icon": "basic-icon"
            },
            {
                "id": 5,
                "name": "Full Course",
                "description": "All 4 courses in one package",
                "price": 199,
                "type": "course",
                "content": null,
                "owned": false,
                "icon": "full-icon"
            },
            {
                "id": 6,
                "name": "Premium Group Access",
                "description": "Join our premium trading group",
                "price": 30,
                "type": "group",
                "content": null,
                "owned": false,
                "icon": "premium-icon"
            },
            {
                "id": 7,
                "name": "VIP Group Access",
                "description": "Exclusive VIP trading community",
                "price": 30,
                "type": "group",
                "content": null,
                "owned": false,
                "icon": "ai-course"
            }
        ]

    return <div className="products">
        <div className="products-container">
            {products.map(pr => <ProductItem product={pr} key={pr.id.toString()+pr.name}/>)}
        </div>
    </div>
}