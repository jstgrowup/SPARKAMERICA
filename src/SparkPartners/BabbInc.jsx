import React from 'react'
import { Box, Button, Center, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
export default function BabbInc() {
    return (
        <>

            <Center w={"100%"} minH={"600px"} mt="20px"   >
                <SimpleGrid maxW={"80%"} columns={[1, 1, 2, 3]} spacing={"5"}  >
                    <Flex p={"30px"} direction={"column"} gap="30px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Babb.png' alt='okay'></Image>
                        <Heading color="#222222"
                            size={"lg"}
                            fontWeight="thin"
                            fontFamliy="sans-serif">BABB, INC</Heading>
                        <Heading size={"md"}>Strategic Partner</Heading>
                        <Text noOfLines={[20, 14, 8]}>
                            Since 1929, Babb, Inc. has established a
                            solid reputation as a leading, independent
                            insurance broker, third party administrator,
                            and consulting firm. With a unique
                            perspective, extensive experience, and
                            innovative business strategies, we deliver
                            our clients the best services and options
                            possible.
                        </Text>
                        <Center >
                            <Button w={"171px"} h={"58px"} borderRadius={"md"}>VISIT BABB </Button>
                        </Center>
                    </Flex>
                    <Flex p={"30px"} direction={"column"} gap="30px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Oswald.png' alt='okay'></Image>
                        <Heading color="#222222"
                            size={"lg"}
                            fontWeight="thin"
                            fontFamliy="sans-serif">OSWALD COMPANIES</Heading>
                        <Heading size={"md"}>Strategic Partner</Heading>
                        <Text noOfLines={[20, 15, 9]}>
                            Founded in 1893, Cleveland-based, and
                            employee-owned, Oswald is one of the
                            nation’s largest independent insurance.
                            brokerage and risk management firms. As a
                            proud Partner of Assurex Global, the world’s
                            largest association of privately held
                            insurance brokers, our risk management
                            professionals service and support the needs
                            of our clients worldwide.
                        </Text>
                        <Center >
                            <Button w={"254p"} h={"58px"} borderRadius={"md"}>VISIT OSWALD COMPANIES </Button>
                        </Center>
                    </Flex>
                    <Flex p={"30px"} direction={"column"} gap="30px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/04/RCMD-2048x1072.jpeg' alt='okay'></Image>
                        <Heading color="#222222"
                            size={"lg"}
                            fontWeight="thin"
                            fontFamliy="sans-serif">RCM&D</Heading>
                        <Heading size={"md"}>Strategic Partner</Heading>
                        <Text noOfLines={[20, 14, 7]}>
                            RCM&D is ranked among the top
                            independent insurance advisory firms in the
                            our cities that help us promote awareness and activate participation.
                            United States. Founded in 1885, we leverage
                            our 135+ years of experience and strong
                            local, national and global reach to meet
                            clients business objectives.
                        </Text>
                        <Center>
                            <Button w={"171px"} h={"58px"} borderRadius={"md"}>VISIT RCM&D </Button>
                        </Center>
                    </Flex>
                </SimpleGrid>
            </Center>


        </>
    )
}
