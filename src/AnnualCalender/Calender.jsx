import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import HomeFooter from '../Home/CommonFooter'
import CommonNavbar from '../SparkCities/CommonNavbar.tsx'
import MainGrid from './MainGrid'
import OurCalender from './OurCalender'
export default function Calender() {
    return (
        <>
            <CommonNavbar />
            <Center>

                <Box m="1.5" style={{ height: "2.5px", width: "50%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
            </Center>
            <OurCalender />
            <MainGrid />
            <HomeFooter />

        </>
    )
}
