import { AboutUs } from "@/components/AboutUs"
import Feature from "@/components/Feature"
import { HomeScreen } from "@/components/Homepage"
import HowToBuy from "@/components/HowToBuy"
import { RoadMap } from "@/components/RoadMap"
import Tokenomics from "@/components/Tokenomics"

const page = () => {
  return (
    <>
      <HomeScreen/>
      <AboutUs/>
      <Feature/>
      <Tokenomics/>
      <HowToBuy/>
      <RoadMap/>
    </>
  )
}

export default page