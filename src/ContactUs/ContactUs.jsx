import React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import ReadyToJoin from './ReadyToJoin'
import CommonNavbar from '../SparkCities/CommonNavbar.tsx'
import Reachout from './Reachout'

export default function ContactUs() {
    return (
        <>
            <CommonNavbar />
            <ReadyToJoin />
            <Reachout />

        </>
    )
}
