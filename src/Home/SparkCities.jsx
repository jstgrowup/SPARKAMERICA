import React from 'react'
import { Box, Button, Center, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import { ArrowForwardIcon } from '@chakra-ui/icons'
export default function SparkCities() {
    return (
        <>
            <Box w={"80%"} display="flex" alignItems="center" justifyContent="center">
                <SimpleGrid columns={[1, 1, 2]} spacing='24px'>
                    <Stack gap="10px">
                        <Heading fontWeight="weight">SPARKCITIES</Heading>
                        <Text noOfLines={[5, 4, 3]}>
                            Is your city a SparkCity? Great cities like Pittsburgh,Cleveland,
                            Cincinnati, Akron and Columbus are engaged in firndly and spirited
                            competion to become healthier and more community focused
                        </Text>
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/SparkCity_Columbus.jpg' alt='okay'></Image>
                        <Container >
                            <Button w="250px" h="48px" bg="#d7282f" color="white" borderRadius="3xl">JOIN THE MOVEMENT <ArrowForwardIcon/></Button>
                        </Container>
                    </Stack>
                    <Stack gap={"10px"}>
                        <Heading fontWeight="weight">SPARKPARTNERS</Heading>
                        <Text noOfLines={[5, 4, 3]}>
                            At SparkAmerica we team with brands that promote health for
                            everyone, like Vionic and RYU. We also have media partners in each of
                            our cities that help us promote awareness and activate participation.
                        </Text>
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Partner_Vionic_Shoes.jpg' alt='okay'></Image>
                        <Container >
                            <Button w="250px" h="48px" colorScheme="red" bg="#d7282f" color="white" borderRadius="3xl">JOIN THE MOVEMENT <ArrowForwardIcon/></Button>
                        </Container>
                    </Stack>
                </SimpleGrid>
            </Box>
        </>
    )
}
