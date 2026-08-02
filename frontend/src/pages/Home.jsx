import 'react'
import Hero from '../components/Hero';
import Biography from '../components/Biography';
import Departments from '../components/Departments';
import MessageForm from '../components/MessageForm';
const Home = () => {
  return( 
    <>
      <Hero title={"Welcome to Health Horizon's Institute | Your Trusted HealthCare Provider"

      } 
      imageUrl={"/hero3.png"}
      />
      <Biography imageUrl={"/girl2.png"}/>
        <Departments/>
        <MessageForm/>
        
      
    </> 
  );
};

export default Home;
