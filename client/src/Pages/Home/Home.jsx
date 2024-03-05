import Explore from "../../components/ui/Explore";
import HomeBanner from "../../components/ui/Banner/HomeBanner";
import Swipper from "./Swipper";
import TravelServices from "../../components/shared/TravelServices";
import BestHotels from "../../components/shared/BestHotels";

const Home = () => {
  
    return (
        <div className="">
            <HomeBanner />
            <Explore />
            <TravelServices />
            <Swipper />
            <BestHotels />
        </div>
    );
};

export default Home;