import { Box, Button, Center, Checkbox, Flex, Heading, Input, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import ReCAPTCHA from "react-google-recaptcha";
export default function Reachout() {
    const [verified, setverified] = useState(false)


    const [formData, updateFormdata] = useState({
        uname: "",
        email: "",
        Partnering: false,
        Sponsoring: false,
        bring: false,

    });
    const { uname, email, Partnering, Sponsoring, bring } = formData
    const handleChange = (e) => {
        let { value, name, type, checked } = e.target
        value = type === "checkbox" ? checked : value
        updateFormdata((prev) => ({ ...prev, [name]: value }))
        if (uname.length > 0 && email.length) {
            setverified(true)
        }

    }
    function onchange(value) {
        console.log("Captcha value:", value);

    }
    const handleSubmit = () => {
        setverified ? alert("ok") : alert("sorry")
    }

    return (
        <>
            <Center w={"100%"} minH={"590px"} mt="40" mb={"30"} >
                <SimpleGrid maxW={"80%"} columns={[1, 1, 2, 2]} spacing={"5"}  >
                    <Flex minH={"576px"} align="flex-start" gap={"5"} direction="column">
                        <Heading
                            color="#222222"
                            fontWeight="thin"
                            fontFamliy="sans-serif">REACH OUT
                        </Heading>


                        <Input onChange={handleChange} value={uname} name="uname" size={"lg"} type={"text"} placeholder='Your Name' />
                        <Input onChange={handleChange} value={email} name="email" size={"lg"} type={"email"} placeholder='Email Address' />
                        <Heading size={"sm"}>Your Interest in SparkAmerica</Heading>
                        {/*         Partnering: false,
        Sponsoring: false,
        bring: false, */}
                        <label htmlFor="">
                            <input type={"checkbox"} onChange={handleChange} name="Partnering" checked={Partnering} colorScheme='red' />
                            Interested in Partnering



                        </label>


                        <label htmlFor="">
                            <input type={"checkbox"} onChange={handleChange} name="Sponsoring" checked={Sponsoring} size='md' colorScheme='red' />
                            Interested in Sponsoring

                        </label>
                        <label htmlFor="">
                            <input type={"checkbox"} onChange={handleChange} name="bring" checked={bring} size='md' colorScheme='red' />
                            Please bring SparkAmerica to Our City



                        </label>

                        <ReCAPTCHA
                            sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                            onChange={onchange}
                        />

                        <Button disabled={verified === false} onClick={handleSubmit} fontSize={"xs"} size="lg" >SEND MESSAGE</Button>




                    </Flex>

                    <Text minH={"535px"} w={"43%"} noOfLines={[15, 10, 4]} >
                        support@sparkamerica.com

                        (888) 330-6891

                        SparkAmerica

                        P.O Box 123, OakMont,PA 15139
                    </Text>

                </SimpleGrid>
            </Center>
        </>
    )
}
