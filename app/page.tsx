import Heroscetion from "./components/Heroscetion";

import Services from "./components/Services";
import InfiniteCarousel from "./components/Infinitecarousel";
import Founders from "./components/Founders";
import Benefits from "./components/Benefits";
import Aboutus from "./components/Aboutus";
import Projects from "./components/Projects";
import Bookmeeting from "./components/Bookmeeting";
import Frequentquestion from "./components/Frequentquestion";
import Analyticsdashboard from "./components/Analyticsdashboard";
import Footer from "./components/Footer";
import { Lato } from "next/font/google";
const lato = Lato({ 
  subsets: ["latin"],
  weight: ["400", "700"],

});


export default function Home() {
  return (
    <>
    
    <Heroscetion/>
    <Services/>
   
     <Benefits/>
     <Aboutus/>
    <Projects/>
     <InfiniteCarousel/>
    <Analyticsdashboard/>
    <Founders/>
   
   <Frequentquestion/>
   <Bookmeeting/>
   <Footer/>
    </>
  );
}
