import { Box, Center, Heading, Text } from '@chakra-ui/react'
import React from 'react'

export default function OurPartners() {
    return (
        <>
            <Center w={"100%"} minH={"170px"} mt="50px"   >
                <Box maxW={"80%"} minH={"150px"}    >
                    <Heading
                        color="#222222"
                        fontWeight="thin"
                        fontFamliy="sans-serif">OUR PARTNERS</Heading>
                    <Box m="2" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }} >
                    </Box>
                    <Text noOfLines={[20, 14, 4]}>
                        We are extremely grateful to have amazing partners in building SparkAmerica, they help make all we do possible. From providing prizes to social media
                        awareness to television time, they keep the spark ignited across our cities and communities. Our partners collectively work with thousands of
                        companies including HR leaders and exec teams and millions of TV and digital viewers. If you're interested in partnering with us please contact us via
                        healthiest SparkCity in America!
                    </Text>
                </Box>


            </Center>


        </>
    )

}
