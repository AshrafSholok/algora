import React from 'react'
import { Fragment } from 'react'
import Hero from '../../components/common/Hero'
import DigitalMarketing from '../../components/services/DigitalMarketing'
import WebDevelopment from '../../components/services/WebDevelopment'
import UIUXDesign from '../../components/services/UIUXDesign'

function Services() {
  return (
    <Fragment>
      <Hero title={"Our Services"} />
      <DigitalMarketing />
      <WebDevelopment />
      <UIUXDesign />
    </Fragment>
  )
}

export default Services