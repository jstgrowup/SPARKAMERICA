import { Box, Button, Center, Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
export default function SomethingForEveryone() {
    return (
        <>
            <Center w={"100%"} minH={"510px"} mt="150px" backgroundImage="https://sparkamerica.com/wp-content/uploads/2020/11/HomePage_AboutUsSectionImg.jpg" >

                <Flex direction={"column"} align="center">
                    <Box maxW={"80%"}  >
                        <Heading fontWeight="weight" color={"white"}>SOMETHING FOR EVERYONE</Heading>
                        <Text noOfLines={[5, 4, 2]} color={"red"} >
                            SparkAmerica is designed to fit everyone, with a range of activities that anyone can participate in - from healthy eating to financial fitness to active minutes
                            challenges. SparkAmerica strives to be inclusive because we believe that everyone deserves the opportunity to be fit and healthy.

                          
                        </Text>
                    </Box>
                    <Button mt={"20px"} w="194px" h="48px" variant="solid">LEARN MORE <ArrowForwardIcon /></Button>
                </Flex>
            </Center>


        </>
    )
}
