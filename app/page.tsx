import Heroscetion from "./components/Heroscetion";

import Services from "./components/Services";
import InfiniteCarousel from "./components/Infinitecarousel";
import Founders from "./components/Founders";
import Benefits from "./components/Benefits";
import Developmenthub from "./components/Developmenthub";
import Projects from "./components/Projects";
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
    <InfiniteCarousel/>
     <Benefits/>
     <Developmenthub/>
    <Projects/>
    <Founders/>
   
    </>
  );
}
