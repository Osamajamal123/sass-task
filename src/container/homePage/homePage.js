import Header from "../../components/header/header";
import CardsSection from "../../components/cardsSection/cardsSection"
import LevelsSection from "../../components/levelsSection/levelsSection"
import PromotionSection from "../../components/promotionSection/promotionSection"
import Footer from "../../components/footer/footer";

const HomePage = () => {
    return (
        <div>
            <Header />
            <CardsSection />
             <LevelsSection/> 
             <PromotionSection/>  
             <Footer />  
        </div>
    )
}
export default HomePage;