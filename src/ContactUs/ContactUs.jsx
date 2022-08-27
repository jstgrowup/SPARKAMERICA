import React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import ReadyToJoin from './ReadyToJoin'
import CommonNavbar from '../SparkCities/CommonNavbar.tsx'
import Reachout from './Reachout'
import HomeFooter from '../Home/CommonFooter'

export default function ContactUs() {
    document.title="CONTACT US - SparkAmerica"
    return (
        <>
            <CommonNavbar />
            <ReadyToJoin />
            <Reachout />
            <HomeFooter />
        </>
    )
}
