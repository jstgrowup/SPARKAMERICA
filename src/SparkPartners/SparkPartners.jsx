import React from 'react'
import HomeFooter from '../Home/CommonFooter'
import CommonNavbar from '../SparkCities/CommonNavbar.tsx'
import BabbInc from './BabbInc'
import OurPartners from './OurPartners'
import ThirdCompo from './ThirdCompo'
import VionicShoes from './VionicShoes'

export default function SparkPartners() {
    return (
        <>
            <CommonNavbar />
            <OurPartners />
            <VionicShoes />
            <BabbInc />
            <ThirdCompo />
            <HomeFooter />
        </>
    )
}
