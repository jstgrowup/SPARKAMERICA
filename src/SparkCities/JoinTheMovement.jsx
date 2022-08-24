import { Box, Center } from '@chakra-ui/react'
import React from 'react'
import JoinSparksAmerica from './JoinSparksAmerica'

import JoinMoveNavbar from './JointheMoveNavbar.tsx'
import Oneperson from './Oneperson'


export default function JoinTheMovement() {
    return (
        <>
            <JoinMoveNavbar />
            <Center>

                <Box style={{ height: "2px", width: "50%", borderWidth: "0", color: "red", backgroundColor: "red" }} >
                </Box>
            </Center>

            <Oneperson />
             <JoinSparksAmerica/>

        </>
    )
}
