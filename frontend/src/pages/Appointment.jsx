import 'react'
import Hero from "../components/Hero"
import AppointmentForm from "../components/AppointmentForm"
const Appointment = () => {
  
  return (
    <>
       <Hero title={"Schedule Your Appointment | Health Horizon's Institute"} imageUrl={"/123.png"}/>
      <AppointmentForm/>
    </>
  )
}

export default Appointment
