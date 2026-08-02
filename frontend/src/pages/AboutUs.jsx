import 'react'
import Hero from "../components/Hero"
import Biography from "../components/Biography"
const AboutUs = () => {
  return (
    <>
     <Hero title={"Learn More About Us | Health Horizon's Institute"} imageUrl={"/hos1.png"}/> 
     <Biography imageUrl={"/girl2.png"}/>
    </>
  )
}

export default AboutUs
