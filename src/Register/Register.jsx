import { Box, Button, Center, Flex, Heading, Input, Spacer, Spinner, Text } from '@chakra-ui/react'
import React, { useState } from 'react'
import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
} from '@chakra-ui/react'
import { ChevronRightIcon } from "@chakra-ui/icons"
import ReCAPTCHA from "react-google-recaptcha";
import { useNavigate } from "react-router-dom"



export default function Register() {
    const [input, setInput] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const navi = useNavigate()
    let isError = ""
    function onchange(value) {
        console.log("Captcha value:", value);

    }
    const handleInputChange = (e) => setInput(e.target.value)
    const hola = () => {

        setIsLoading(true);
        setTimeout(() => {
            setIsLoading(false);
            navi("/signup");
        }, 1500);
    }
    function check() {

        isError = input === '' ? alert("please enter your email") : hola()

    }

    return (
        <>
            <Box minW={"100%"} minH={"900px"} backgroundImage="https://portal.peopleonehealth.com/Content/Images/CityImages/SparkAmericaCityPageHeader.jpg">
                <Center>
                    <Box minH={"96px"} w="750px" onClick={() => navi("/")} backgroundImage="https://portal.peopleonehealth.com/Content/Images/CityImages/SparkAmerica2020-02-768x96.png">
                    </Box>

                </Center>
                {/* box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px; */}
                <Center minW={"100%"} minH="500px"  >
                    <Flex gap="4" direction={"column"} align="flex-center" p="2rem" bg="#FFFFFF" borderRadius={"2xl"} boxShadow={"rgba(0, 0, 0, 0.24) 0px 3px 8px;"} minH={"300px"} minW={"591px"} >
                        <FormControl isInvalid={isError}>
                            <Text fontFamily={"Montserrat"} fontSize={"xl"}>Please enter your email address to get started:</Text>
                            <Input
                                type='email'
                                value={input}
                                onChange={handleInputChange}
                            />
                            {!isError ? (
                                <FormHelperText>
                                    After entering please click on the submit button
                                </FormHelperText>
                            ) : (

                                <FormErrorMessage >  Email is required.</FormErrorMessage>
                            )}
                        </FormControl>
                        <Text fontSize={"lg"} fontFamily={"Montserrat"}>
                            Note:If your organization or company already uses
                            <br />
                            PeopleOne, pleasee enter your company email address above

                        </Text>

                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onchange}
                        />
                        <Flex align={"center"}>
                            <Heading fontSize={"md"} color="#006DA8" >GO BACK</Heading>
                            <Spacer />
                            <Button onClick={check} variant={"ghost"}>
                                {isLoading ? <Spinner color='white.500' /> : "CONTINUE >"}



                            </Button>
                        </Flex>
                    </Flex>
                </Center>


            </Box>


        </>
    )
}
// {isLoading && <Spinner color="red.500" />}
