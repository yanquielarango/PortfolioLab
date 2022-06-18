import About from "../components/About"
import Footer from "../components/Footer"
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
        <Footer/>
      </>  
      
  
  )
}

export default HomePage