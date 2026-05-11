import { useContext, useState } from "react"
import "./ProductItem.scss"
import { purchase } from "../../api/product.api"
import { TgContext } from "../../context/TgContext"

export default function ProductItem({ product, inner_balance }) {
    const { tgId } = useContext(TgContext)
    const [status, setStatus] = useState('inactive')
    const [isLocked, setIsLocked] = useState(true)

    const handleBuy = async () => {
        await purchase(tgId, product.id)
            .then(() => {

            }).catch((e) => {
                alert(e.message)
            })

    }

    const handleOpen = async () => {
        
    }

    return <div className="product" >
        <div className={`product-container ${!product.owned ? "" : "owned"}`}>
            <div className="product-container__wrapper-img">
                <img src={`/images/products/${product.icon}.png`} alt="" />
            </div>
            <div className="product-container__content">
                <div className="content-text">
                    <p className="content-text__title">{product.name}</p>
                    <p className="content-text__desc">{product.description}</p>
                </div>
                <div className="content-footer">
                    <p className="content-footer__price">{product.price} ACT</p>
                    {!product.owned && !isLocked ?
                        <button className="content-footer__btn btn-buy" onClick={handleBuy}>BUY</button> :
                        <button className="content-footer__btn btn-open" onClick={handleOpen}>OPEN</button>}
                        {isLocked && <button className="content-footer__btn btn-open" onClick={handleOpen}>LOCKED</button> }
                </div>
            </div>
            {/* <div className="product-container__status">inactive</div> */}
        </div>
    </div>
}