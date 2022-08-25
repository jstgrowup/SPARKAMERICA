import React, { useState } from 'react'
import { Box, Button, Center, Flex, Heading, Spacer, Spinner, Text } from '@chakra-ui/react'


import { ChevronRightIcon } from "@chakra-ui/icons"

import { useNavigate } from "react-router-dom"
export default function Thankyou() {

    const [isLoading, setIsLoading] = useState(false);

    const navi = useNavigate()
    let isError = ""


    const hola = () => {

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navi("/signup");
        }, 1500);
    }
    function check() {

        hola()

    }
    const boxsize = {
        primary: {
            minW: "569px",
            minH: "439px"
        },
        sec: {
            minW: "460px",
            minH: "339px"
        }

    }
    return (
        <>

            <Box minW={"100%"} minH={"900px"} backgroundImage="https://spark360prodstorage.blob.core.windows.net/cityimages/citysparkbostoncityimage22.png">
                <Center>
                    <Box minH={"96px"} w="750px" backgroundImage="https://portal.peopleonehealth.com/Content/Images/CityImages/SparkAmerica2020-02-768x96.png">
                    </Box>

                </Center>
                {/* minH={"489px"} minW={["100px","400px","591px"]} */}
                <Center minW={"100%"} minH="500px">
                    <Flex gap="9" direction={"column"} align="center" p="2rem" bg="#FFFFFF" borderRadius={"2xl"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} boxSize={[270, 370, boxsize.sec, boxsize.primary]} >
                        <Heading fontWeight={"thin"} fontSize="4xl">Thank you, { }</Heading>
                        <Text fontSize={"lg"} fontFamily={"Montserrat"} noOfLines={[10, 6, 3]} textAlign="center">
                            we've sent you an email containing a verification link
                            Simply open the email and click the link to complete
                            setup


                        </Text>
                        <Heading fontSize={"md"}>Didn't recieve the email</Heading>
                        <Text>
                            Wait a few minuted and be sure to check your Spam forlder
                            Still nothing?
                        </Text>
                        <Button onClick={check} variant={"ghost"} size={"lg"} minW="100%">
                            {isLoading ? <Spinner color='white.500' /> : "ClICK TO RE-SEND"}



                        </Button>
                        <Heading color="#006DA8" fontSize={"md"}>Contact Support</Heading>

                    </Flex>
                </Center>


            </Box>

        </>
    )
}
