import 'react'

// eslint-disable-next-line react/prop-types
const Biography = ({ imageUrl }) => {
  return (
    <div className="container biography">
        <div className="banner">
        
          <img src={imageUrl} alt="aboutImg" />
        </div>
        <div className="banner">
        <h3>Why Choose Health Horizon's</h3>
        <p>
        At Health Advisor, we aim to make healthcare more accessible, efficient, and user-friendly.
         Whether you need to book a doctor's appointment, find the nearest hospital, track your daily calorie intake, or get instant health-related advice from our AI-powered chatbot, we have you covered. 
        </p>
        <p>Convenient & FastSave time by accessing multiple healthcare services in one platform. 
AI-Driven & Reliable Get accurate health insights powered by artificial intelligence.  
Personalized Experience Receive recommendations based on your health history and preferences.  
User-Friendly Interface Easy navigation ensures a hassle-free experience for all users.  

Join Health Horizon's today and take control of your health with smart, efficient, and AI-powered healthcare solutions!
        </p>
        </div>
      </div>
  
  );
};

export default Biography
