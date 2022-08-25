import React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
export default function OurApp() {
    return (
        <>
            <Center w={"100%"} minH={"170px"} mt="50px"   >
                <Box maxW={"80%"} minH={"150px"}    >
                    <Heading
                        color="#222222"
                        fontWeight="thin"
                        fontFamliy="sans-serif">OUR APP</Heading>
                    <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "#d7282f", backgroundColor: "red" }} >
                    </Box>
                    <Text noOfLines={[20, 13, 4]} color="blackAlpha.900" fontSize="md">
                        SparkAmerica is powered by the <Link style={{ color: "blue" }} to={"/accountLogin"}>PeopleOne Health app</Link>, a world-class technology platform created by our experienced team responsible for developing
                        we ready interfaces and apps that received more than 50 million annual visitors with high engagement levels. It's designed to be intuitive and user
                        friendly, and makes it easy to participate in SparkAmerica challenges, users can track their progress, get access to helpful resources, and view
                        community information like leaderboards and updates.
                    </Text>
                </Box>
            </Center>


        </>
    )
}
