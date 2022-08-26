import { Center, Flex, Heading, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function HomeFooter() {
    return (
        <>
            {/* maxW={"90%"} maxH="853px" minH={"700px"} */}
            <Center w={"100%"} minH={"454px"} border={"2px"} borderColor="solid purple" bg={"#3d7cc9"} color="white" >
                <SimpleGrid maxW={"30%"} minH={"200px"} columns={[1, ,1, 1, 2]} spacing={"17"}>
                    <Flex minW={"44%"} direction={"column"} align="center" gap={"6"} >
                        <Heading fontSize={"30px"} fontWeight={"thin"}>CONTACTUS</Heading>
                        <Text noOfLines={[13, 7, 4]}>
                            Support@sparkamaerica.com
                            (888) 330-6891
                            SparkAmerica
                            P.O. Box 123, Oakmont, PA 15139
                        </Text>
                    </Flex>
                    <Flex direction={"column"} align="center" gap={"20px"} >
                        <Heading fontSize={"30px"} fontWeight={"thin"}>SPARKAMERICA</Heading>
                        <Text >
                            JOIN THE MOVEMENT
                            PARTNERS
                            CALENDAR
                            THE APP
                            CONTACT US
                            REGISTER
                        </Text>
                    </Flex>
                </SimpleGrid>
            </Center>

        </>
    )
}
