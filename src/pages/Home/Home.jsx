import { useState, useEffect } from "react";
import "./Home.scss"
import Header from "../../components/Header/Header";
import RegisterNow from "../../components/RegisterNow/RegisterNow";
import Footer from "../../components/Footer/Footer";
import { useContext } from "react";
import { TgContext } from "../../context/TgContext";
import Registered from "../../components/Registered/Registered";
import StatusProgress from "../../components/StatusProgress/StatusProgress";
import { getUserProfile, getUserStatus } from "../../api/user.api";
import Loader from "../../components/Loader/Loader"
import Products from "../../components/Products/Products";
import { getProducts } from "../../api/product.api";

export default function Home() {
    const { tgId, name } = useContext(TgContext)
    const [isReg, setIsReg] = useState(false)
    const [isLoading, setIsLoading] = useState(true)
    const [status, setStatus] = useState(null)
    const [products, setProducts] = useState([])

    useEffect(() => {

        const fetchUser = async () => {
            try {
                if (!tgId) return;

                const data = await getUserProfile(tgId);
                setIsReg(data.registered ?? false);

                const dataStatus = await getUserStatus(tgId);
                setStatus(dataStatus);

                const dataProducts = await getProducts(tgId);
                setProducts(dataProducts.products);

            } catch (e) {
                console.log("Home error: ", e)
            } finally {
                setIsLoading(false)
            }

        }

        fetchUser()
    }, [tgId]);

    return (
        <div className="home">
            <div className="home-container">
                <Header name={name} />
                {isLoading ? <Loader /> :
                    <>
                        <StatusProgress status={status} tgId={tgId} />
                        {!isReg ? <RegisterNow tgId={tgId} /> : <Registered />}
                        <>
                            <Products products={products} />
                        </>
                    </>
                }
                <Footer />
            </div>
        </div>
    );
}
