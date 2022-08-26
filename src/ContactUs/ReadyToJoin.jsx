import React from 'react'
import { Box, Center, Heading, Text } from '@chakra-ui/react'
import { Link } from "react-router-dom"
export default function ReadyToJoin() {
    return (
        <>
            <Center w={"100%"} minH={"170px"} mt="50px"   >
                <Box maxW={"80%"} minH={"150px"}    >
                    <Heading
                        color="#222222"
                        fontWeight="thin"
                        fontFamliy="sans-serif">READY TO JOIN?</Heading>
                    <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "#d7282f", backgroundColor: "red" }} >
                    </Box>
                    <Text noOfLines={[25, 16, 6]} color="blackAlpha.900" fontSize="md">
                        SparkAmerica is made up of <Link style={{ color: "blue" }} to={"/spark-partners"}>organizations and businesses</Link> just like yours. If you're interested in participating, joining us as a strategic partner, or
                        becoming a sponsor, we would love to hear from you. Have questions about how you can utilize our <Link style={{ color: "blue" }} to={"/annual-challenge-calender"}>Annual Calender</Link> in your organization? We can help
                        you understand how it all works to deliver a thriving culture.
                        If you're an individual interested in joining a team, please visit our <Link style={{ color: "blue" }} to={"/join-the-movement"}>SparkCities</Link> page to see if your city is listed. From there you can see visit one of our
                        SparkCity home pages and look for your organization. If you don't see your organization, ask your HR leader to sign up and enter your business name
                        and, once verified, your organization will become a part of the movement.
                    </Text>
                </Box>
            </Center>

        </>
    )
}
