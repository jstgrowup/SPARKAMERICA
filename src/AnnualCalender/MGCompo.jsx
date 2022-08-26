import { Flex, Heading, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function MGCompo({ head1, head2, text1, text2, text3, img }) {
    return (
        <>

            <Flex minH={"522px"} p={"30px"} direction={"column"} gap="10px" border={"1px"} borderColor="solid black" align="center">
                <Heading fontWeight={"thin"} fontSize={"30px"}>{head1}</Heading>
                <Heading fontWeight={"thin"} fontSize={"30px"}>{head2}</Heading>
                <Text noOfLines={[13, 7, 3]} align="center" fontSize={"lg"} fontWeight="semibold">
                    {text1}
                    <br />
                    {text2}
                    <br />
                    <b>{text3}</b>
                </Text>
                <Image src={img} alt='okay'></Image>


            </Flex>

        </>
    )
}
