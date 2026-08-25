import { Fragment } from 'react'
import Hero from '../../components/common/Hero'
import AboutUs from '../../components/about/AboutUs'

function About() {
  return (
    <Fragment>
       <Hero title={"About Us"}/> 
       <AboutUs />
    </Fragment>
  )
}

export default About