import { Helmet } from "react-helmet-async";
import Slider from "../banner/Slider";
import PopularTournaments from "../popularClass/PopularTournaments";
import PopularInstructor from "../popularInstructor/PopularInstructor";
import Campus from "../campus/Campus";
import Step from "../step/Step";
import NextDestination from "../nextDestination/NextDestination";
import aniCricket from "../../../assets/images/aniCricket.avif";
import ani2 from "../../../assets/images/ani2.webp";
// import ani3 from '../../../assets/images/ani3.jpg'
const Home = () => {
  return (
    <>
      <Helmet>
        <title>VIRATIAN</title>
      </Helmet>
{/*       <div>
        <div>
          <div className="flex items-center">
            <div className="w-96 ">
              <img src={aniCricket} alt="" />
              <img src={ani2} alt="" /> <img src={ani2} alt="" />{" "}
              <img src={ani2} alt="" />
              <img src={ani2} alt="" /> <img src={ani2} alt="" />
            </div> */}
            <Slider />
{/*             <div className="w-96 ">
              <img src={aniCricket} alt="" />
              <img src={ani2} alt="" /> <img src={ani2} alt="" />{" "}
              <img src={ani2} alt="" />
              <img src={ani2} alt="" /> <img src={ani2} alt="" />
            </div>
          </div>
        </div>
      </div> */}
      <PopularTournaments></PopularTournaments>
      <PopularInstructor></PopularInstructor>
      <Step></Step>
      <NextDestination></NextDestination>
      <Campus></Campus>
    </>
  );
};

export default Home;
