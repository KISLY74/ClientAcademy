import { useState } from "react"
import "./ProductItem.scss"

export default function ProductItem({ product }) {
    const [status, setStatus] = useState('inactive') //запрос....

    return <div className="product" >
        <div className="product-container">
            <div className="product-container__wrapper-img">
                <img src={`/images/products/${product.icon}.png`} alt="" />
            </div>
            <div className="product-container__content">
                <div className="content-text">
                    <p className="content-text__title">{product.name}</p>
                    <p className="content-text__desc">{product.description}</p>
                </div>
                <div className="content-footer">
                    <p className="content-footer__price">${product.price}</p>
                    <button className="content-footer__btn">BUY</button>
                </div>
            </div>
            <div className="product-container__status">inactive</div>
        </div>
    </div>
}