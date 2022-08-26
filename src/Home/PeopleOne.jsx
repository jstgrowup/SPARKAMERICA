import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function PeopleOne() {
    return (
        <>
            <Center w={"100%"} minH={"853px"} mt="100px"   >
                <Box maxW={"90%"} minH={"700px"} >
                    <SimpleGrid columns={[1, null, 2]} >
                        <Flex align={"center"} direction="column" gap={"15"}>
                            <Heading color="#222222"

                                fontWeight="thin"
                                fontFamliy="sans-serif" noOfLines={[5, 4, 3]} variant="base">
                                PEOPLEONE HEALTH APP
                                AND WEBSITE

                            </Heading>
                            <Text noOfLines={[16, 12, 9]}>
                                At the core of SparkAmerica you'll find the
                                PeopleOne Health app. This technology platform
                                helps our members track their health and join in
                                challenges through our easy-to-use Fitness
                                Game. So whether you're an individual or part of
                                a large corporation, you can have access to our
                                world class platform that's intuitive, fun, and
                                FREE.
                            </Text>
                            <Button w={"165px"} variant="solid">LEARN MORE</Button>
                        </Flex>
                        <SimpleGrid columns={[1, 1, 2]} spacing="4" >
                            <Flex align={"center"} direction="column" gap={"4"} >
                                <Image w="360px" h="208px" src={"https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/Homepage_FitnessGame6.jpg"}></Image>
                                <Image w="360px" hminH="365px" src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/Homepage_FitnessGame5.jpg'></Image>
                            </Flex>
                            <Flex align={"center"} direction="column" gap={"4"}>
                                <Image w="360px" h="365px" src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/Homepage_FitnessGame0.jpg'></Image>
                                <Image w="360px" h="208px" src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/Homepage_FitnessGame2.jpg'></Image>
                            </Flex>
                        </SimpleGrid>
                    </SimpleGrid>
                </Box>


            </Center>

        </>
    )
}
