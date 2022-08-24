import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import React from 'react'

export default function VionicShoes() {
    return (
        <>
            <Center w={"100%"} minH={"170px"} mt="50px"   >
                <SimpleGrid maxW={"80%"} minH={"150px"} border={"1px"} borderColor="solid black" columns={[1, 1, 2]} p="10px" spacing={"10"}  >
                    <Box >
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/VioinicLG-01.png'></Image>
                    </Box>
                    <Box>
                        <Flex align={"flex-start"} direction="column" gap={"20px"}>
                            <Heading color="#222222"
                                size={"lg"}
                                fontWeight="thin"
                                fontFamliy="sans-serif">VIONIC SHOES</Heading>
                            <Heading size={"md"}>Presenting Sponsor</Heading>
                            <Text  noOfLines={[24, 17, 10]}>
                                Whether you’re shopping for men’s shoes or women’s shoes,
                                comfortable stylish shoes that keep up with the current style trends
                                should be a priority. What if you could have all that, with supportive
                                arch support technology to relieve aching feet and pain from plantar
                                fasciitis or heel pain? At Vionic, our shoes for women and men provide
                                arch support technology in the most up to date styles. Made with high
                                quality and breathable materials such as durable leather and soft
                                suede, our footwear is created for all-day wear so that your feet can be
                                comfortable no matter where you are going. Walk in comfort when you
                                slip into a comfortable pair of shoes with arch support from Vionic.
                            </Text>
                        </Flex>
                    </Box>
                    <Center>
                        <Button w={"254p"} h={"58px"} borderRadius={"md"} >
                            VISIT VIONIC SHOES
                        </Button>
                    </Center>

                </SimpleGrid>


            </Center>


        </>
    )
}
