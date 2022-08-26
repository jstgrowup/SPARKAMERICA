import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { CheckIcon } from "@chakra-ui/icons"

export default function JoinSparksAmerica() {
    return (
        <>


            <Center w={"100%"} minH={"600px"} mt="50px"  >
                <Flex maxW={"80%"} align="flex-start" direction={"column"}  gap={"19"}  >

                    <Heading
                        color="#222222"
                        size={"lg"}
                        fontFamliy="sans-serif">JOIN SPARKAMERICA</Heading>
                    <Box m="2" style={{ height: "2px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }} >
                    </Box>
                    <Text noOfLines={[20, 14, 4]} w={'50%'}>
                        We have over 70 cities participating in SparkAmerica, click below to sign up in your city today! You can join your city in three ways.
                         First, by being part of your #TeamCity.
                        Second, by joining an existing business or organization in your city.
                        Third, by requesting to add your business or organization.




                    </Text>
                    <Center>
                        <Button _hover={{ bg: 'rgba(255,105,0,1)' }} variant={"outline"} w="197px" h={"46px"} ><CheckIcon /> <Heading size={"xs"}>REGISTER HERE</Heading></Button>
                    </Center>
                    <Text>
                        If you want to learn more about how the SparkAmerica Fit City Challenge works and also learn how you can connect to the tools inside
                        SparkAmerica, download our toolkit!
                    </Text>
                    <Center>

                        <Button _hover={{ bg: 'rgba(255,105,0,1)' }} variant={"outline"} w={'315px'} h="46px" ><CheckIcon /> <Heading size={"xs"}>DOWNLOAD THE TOOLKIT HERE(PDF)</Heading></Button>
                    </Center>
                    <Heading
                        color="#222222"
                        size={"lg"}
                        fontFamliy="sans-serif">FIT CITY CHALLENGE</Heading>
                    <Box m="2" style={{ height: "2px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }} >
                    </Box>
                    <Text noOfLines={[20, 14, 4]}>
                        The Fit City Challenge happens twice a year in the Spring and Fall and is one of our most active challenges. Once you've signed up fro
                        SparkAmerica, you're automatically ready to participate in the Fit City Challenge to help your city become one of the healthiest in America. Check
                        out the cities below to see the latest leaderboards and get your organization and city ready for the next Fit City Challenge.


                    </Text>
                </Flex>


            </Center>

        </>
    )
}
