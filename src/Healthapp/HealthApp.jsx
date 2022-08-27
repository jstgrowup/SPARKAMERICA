import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import HomeFooter from '../Home/CommonFooter'
import CommonNavbar from '../SparkCities/CommonNavbar.tsx'
import HealthAppGrid from './HealthAppGrid'
import OurApp from './OurApp'

export default function HealthApp() {
    document.title="THE APP - SparkAmerica"
    return (
        <>
            <CommonNavbar />
            <Center>
                <Box m="1.5" style={{ height: "2.5px", width: "50%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
            </Center>
            <OurApp />
            <HealthAppGrid />
            <HomeFooter />



        </>
    )
}
