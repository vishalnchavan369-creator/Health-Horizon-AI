import  'react'

// eslint-disable-next-line react/prop-types
const Hero = ({ title, imageUrl }) => {
  return (
    <div className="hero container">
        <div className="banner">
          <h1>{title}</h1>
          <p>
            Welcome to Health Horizon's, your all-in-one AI-powered healthcare assistant.
             Our platform is designed to provide seamless healthcare solutions,combining advanced technology with medical expertise to ensure easy access to healthcare services. 
          </p>
        </div>
        <div className="banner">
          
          <img src={imageUrl} alt="hero1" className="animated-image" />
          <span>
            <img src="/Vector.png" alt="vector" />
          </span>
        </div>
      </div>
  );
};

export default Hero;
