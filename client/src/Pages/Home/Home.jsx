import Explore from "../../components/ui/Explore";
import HomeBanner from "../../components/ui/Banner/HomeBanner";
import Swipper from "./Swipper";
import TravelServices from "../../components/shared/TravelServices";

const Home = () => {
  
    return (
        <div className="">
            <HomeBanner />
            <Explore />
            <TravelServices />
            <Swipper />
        </div>
    );
};

export default Home;