import About from "../components/About"
import Footer from "../components/Footer"
import Fundaction from "../components/Fundaction"
import HomeHeader from "../components/HomeHeader"
import HomeThreeColumns from "../components/HomeThreeColumns"
import SimpleSteps from "../components/SimpleSteps"




const HomePage = () => {


  return (
  
      <>
        <HomeHeader />      
        <HomeThreeColumns/>
        <SimpleSteps/>
        <About/>
        <Fundaction/>
        <Footer/>
      </>  
      
  
  )
}

export default HomePage