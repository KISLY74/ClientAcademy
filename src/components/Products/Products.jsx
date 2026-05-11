import { useEffect, useState, useContext } from "react"
import ProductItem from "../ProductItem/ProductItem"
import "./Products.scss"

export default function Products({ products, inner_balance }) {

    return <div className="products">
        <div className="products-container">
            {products.map(pr => <ProductItem product={pr} key={pr.id.toString() + pr.name} inner_balance={inner_balance}/>)}
        </div>
    </div>
}