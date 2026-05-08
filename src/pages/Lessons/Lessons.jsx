import Footer from "../../components/Footer/Footer"
import ViewerPDF from "../../components/ViewerPDF/ViewerPDF"
import Header from "../../components/Header/Header"

export default function Lessons() {

    return <div className="lessons">
        <div className="lessons-container">
            <Header/>
            <ViewerPDF url={"https://www.calameo.com/read/0082193536fbbd16b258b?authid=XOFlb0SPUsDb"}/>
            <Footer />
        </div>
    </div>
}