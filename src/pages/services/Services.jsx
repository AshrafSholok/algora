import { Fragment } from 'react'
import Hero from '../../components/common/Hero'
import DigitalMarketing from '../../components/services/DigitalMarketing'
import WebDevelopment from '../../components/services/WebDevelopment'
import UIUXDesign from '../../components/services/UIUXDesign'
import MobileAppDevelopment from '../../components/services/MobileAppDevelopment '

function Services() {
  return (
    <Fragment>
      <Hero title={"Our Services"} />
      <DigitalMarketing />
      <WebDevelopment />
      <UIUXDesign />
      <MobileAppDevelopment />
    </Fragment>
  )
}

export default Services