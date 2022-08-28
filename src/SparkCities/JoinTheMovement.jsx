import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import HomeFooter from '../Home/CommonFooter'
import JoinSparksAmerica from './JoinSparksAmerica'
import CommonNavbar from './CommonNavbar.tsx'


import Oneperson from './Oneperson'


export default function JoinTheMovement() {
    document.title="JOIN THE MOVEMENT - SparkAmerica"
    return (
        <>
            <CommonNavbar />
            <Center>

                <Box style={{ height: "2px", width: "50%", borderWidth: "0", color: "red", backgroundColor: "red" }} >
                </Box>
            </Center>

            <Oneperson />
          <JoinSparksAmerica />
            <HomeFooter />
        </>
    )
}
