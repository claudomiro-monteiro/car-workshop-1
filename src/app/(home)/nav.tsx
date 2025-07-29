import React from 'react'
import AboutUs from '../about-us/page'
import Contact from '../contact/page'
import { Location } from '../location/location'
import Services from '../services/page'

export default function Nav() {
  return (
    <div className="px-2 sm:px-8">
      <Services />
      <AboutUs />
      <Location />
      <Contact />
    </div>
  )
}
