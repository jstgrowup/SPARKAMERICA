import React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
export default function OurCalender() {
    return (
        <>

            <Center w={"100%"} minH={"170px"} mt="50px"   >
                <Box maxW={"80%"} minH={"150px"}    >
                    <Heading
                        color="#222222"
                        fontWeight="thin"
                        fontFamliy="sans-serif">OUR PARTNERS</Heading>
                    <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }} >
                    </Box>
                    <Text noOfLines={[35, 20, 8]} color="blackAlpha.900" fontSize="md">
                        SparkAmerica works hard to build community and be accessible to everyone, because leaders come in all shapes, sizes, and levels of ability so there's
                        something for everyone, all year round. The challenges and events on the SparkAmerica Calendar are designed by experts in lifestyle coaching and
                        behavior change science for the total health of participants. That means subjects like nutrition, mental health, sleep, and even financial wellness will be
                        covered.
                        The physical challenges, like the Fit City Challenge, are based on Active Minutes. That means that anyone can participate, because all you need is to be
                        active for at least 10 minutes a day. All kinds of activity - walk your dog, garden, roller skate, play basketball, dance, hike, skateboard, swim - count
                        toward your Active Minutes!
                        All of our challenges utilize the <Link style={{color:"blue"}} to={"/accountLogin"}>PeopleOne Health portal</Link>, our free and easy-to-use technology platform.
                    </Text>
                </Box>


            </Center>
        </>
    )
}
