import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function Oneperson() {
    return (
        <>
            <Center w={"100%"} minH={"170px"} mt="50px" border={"2px"} borderColor="solid purple"  >
                <Box maxW={"80%"} minH={"150px"} border={"2px"} borderColor="solid black"   >

                    <Heading
                        color="#222222"
                        fontWeight="thin"
                        fontFamliy="sans-serif">ONE PERSON, ONE COMMUNITY, ONE CITY AT A TIME</Heading>
                    <Box m="2" style={{ height: "2px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }} >
                    </Box>
                    <Text noOfLines={[20, 14, 4]}>
                        SparkAmerica is focused on building Fit & Healthy leaders all across the country. We do that by implementing programs in SparkCities - urban and
                        suburban localities whose business and civic leaders have joined with us to create community and promote healthy living. We are proud of the work
                        being done and the partnerships we've formed in each of these cities, and of the friendly competition we see each year as they strive to be the
                        healthiest SparkCity in America!
                    </Text>
                </Box>


            </Center>


        </>
    )
}
