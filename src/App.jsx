import { HeroSection } from "./components/HeroSection"
import { HowItWorks } from "./components/HowItWorks"
import { WhoWeServe } from "./components/WhoWeServe"
import { WhyHourlyRec } from "./components/WhyHourlyRec"
import { NeedDevelopers } from "./components/NeedDevelopers"
import { Navigation } from "./components/Navigation"

function App() {

  return (
    <>
    <Navigation/>
    <HeroSection/>
    <HowItWorks/>
    <WhyHourlyRec/>
    <WhoWeServe/>
    <NeedDevelopers/>
    </>
  )
}

export default App
