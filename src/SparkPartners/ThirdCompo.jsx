import React from 'react'
import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
export default function ThirdCompo() {
    return (
        <>
            <Center w={"100%"} minH={"850px"} mt="5px" mb={"36"}>
                <SimpleGrid maxW={"80%"} columns={[1, 1, 2, 3]} spacing={"5"}  >
                    <Flex minH={"422px"} p={"30px"} direction={"column"} gap="10px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2022/01/KDKA-black-and-gold-1200x1200-1-150x150.png' alt='okay'></Image>

                        <Heading size={"md"}>Strategic Partner</Heading>
                        <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
                        <Text noOfLines={[13, 7, 3]}>
                            KDKA,  is a CBS-affiliated television
                            station licensed to Pittsburgh,
                            Pennsylvania, United States.
                        </Text>
                        <Center>
                            <Button w={"124px"} h={"58px"} borderRadius={"md"}>KDKA </Button>
                        </Center>
                    </Flex>
                    <Flex minH={"422px"} p={"30px"} direction={"column"} gap="10px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/ABC5.png' alt='okay'></Image>

                        <Heading size={"md"}>ABC5</Heading>
                        <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
                        <Text noOfLines={[20, 15, 9]}>
                            The oldest television station in the state
                            of Ohio, News 5 is a Scripps-owned ABC
                            affiliate based in Cleveland.
                        </Text>
                        <Center >
                            <Button w={"124px"} h={"58px"} borderRadius={"md"}>ABC5 </Button>
                        </Center>
                    </Flex>
                    <Flex minH={"422px"} p={"30px"} direction={"column"} gap="10px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/04/RCMD-2048x1072.jpeg' alt='okay'></Image>

                        <Heading size={"md"}>ABC6</Heading>
                        <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
                        <Text noOfLines={[20, 14, 7]}>
                            WSYX is an ABC-affiliated television
                            station licensed to Columbus, Ohio,
                            United States.
                        </Text>
                        <Center >
                            <Button w={"124px"} h={"58px"} borderRadius={"md"}>ABC6 </Button>
                        </Center>

                    </Flex>
                    <Flex minH={"422px"} p={"30px"} direction={"column"} gap="10px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/WCPOCincinnati.png' alt='okay'></Image>

                        <Heading size={"md"}>ABC6</Heading>
                        <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
                        <Text noOfLines={[20, 14, 7]}>
                            WCPO is an ABC-affiliated television
                            station licensed to Cincinnati, Ohio,
                            United States.
                        </Text>
                        <Center >
                            <Button w={"124px"} h={"58px"} borderRadius={"md"}>WCPO </Button>
                        </Center>
                    </Flex>
                    <Flex minH={"422px"} p={"30px"} direction={"column"} gap="10px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/MWTM.jpg' alt='okay'></Image>

                        <Heading size={"md"}>Move With the Mayor</Heading>
                        <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
                        <Text noOfLines={[20, 14, 7]}>
                            Mayors use Move with the Mayor™ to
                            encourage residents to protect and
                            improve their health and to make their
                            communities more active and accessible.
                        </Text>
                        <Center >
                            <Button w={"124px"} h={"58px"} borderRadius={"md"}>MWTM </Button>
                        </Center>
                    </Flex>
                    <Flex minH={"422px"} p={"30px"} direction={"column"} gap="10px" border={"1px"} borderColor="solid black" align="center">
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/10/PeopleOne-Logo-Large-FC.png' alt='okay'></Image>

                        <Heading size={"md"}>PeopleOne Health</Heading>
                        <Box m="1.5" style={{ height: "2.5px", width: "30%", borderWidth: "0", color: "red", backgroundColor: "red" }}></Box>
                        <Text noOfLines={[20, 14, 7]}>
                            At PeopleOne Health, we believe the
                            viability and vitality of your business is
                            directly related to the vitality and vibrancy
                            of your employees
                        </Text>
                        <Center >
                            <Button w={"222px"} h={"58px"} borderRadius={"md"}>PeopleOne Health </Button>
                        </Center>
                    </Flex>
                </SimpleGrid>
            </Center>


        </>
    )
}
