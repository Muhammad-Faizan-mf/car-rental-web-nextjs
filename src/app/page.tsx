import Image from "next/image";
import HeroSection from "./components/HeroSection";
import Selections from "./components/Selections";
import PopularCars from "./components/PopularCars";
import RecommendedCars from "./components/RecommendedCars";

export default function Home() {
  return (
   <div className="bg-[#F6F7F9] ">
    <HeroSection/>
    <Selections/>
    <PopularCars/>
    <RecommendedCars/>
   </div>
  );
}
