import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import HomeFooter from '../Home/CommonFooter'
import CommonNavbar from '../SparkCities/CommonNavbar.tsx'
import BabbInc from './BabbInc'
import OurPartners from './OurPartners'
import ThirdCompo from './ThirdCompo'
import VionicShoes from './VionicShoes'

export default function SparkPartners() {
    document.title="PARTNERS - SparkAmerica"
    return (
        <>
            <CommonNavbar />
            <Center>

                <Box m="1.5" style={{ height: "2.5px", width: "50%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
            </Center>

            <OurPartners />
            <VionicShoes />
            <BabbInc />
            <ThirdCompo />
            <HomeFooter />
        </>
    )
}
