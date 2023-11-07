import { ServiceCard } from "../components"
import { services } from "../constants"

const Services = () => {
  return (
    // justify-center to center horizontally
    // flex wrap if we go on smaller devices
    <section className="max-container flex justify-center flex-wrap gap-9">
      {services.map((service) => (<ServiceCard key={service.label} {...service}/>))}
    </section>
  )
}

export default Services