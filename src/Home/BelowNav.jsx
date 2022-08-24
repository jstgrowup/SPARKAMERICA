import React from 'react'
import "./Common.css"
import { Box, Button, Center, Container, Flex, Heading, Image, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import Navbar from './Navbar.tsx'
export default function BelowNav() {
    return (
        <>
            <Box height={"800px"} w="100%" backgroundImage="https://sparkamerica.com/wp-content/uploads/2020/12/HomeHeader1.jpg">

                <Navbar />
                <Box className='rest'>
                    <Stack gap="1rem" >
                        <Heading fontWeight="thin" >WHAT IS SPARKAMERICA?</Heading>
                        <Text noOfLines={[25, 20, 15, 10]} maxWidth="700px" fontSize="15px" fontFamily="sans-serif" color="#222222" >
                            SparkAmerica is a movement.
                            Launching from a platform that reached over 25 million users and helped countless people get
                            healthier, SparkAmerica is led by an alliance of local and national partners that work together to
                            “spark” Americas Fitness & Health, Leadership Development, and Community Engagement by
                            helping one person, one organization, and one city at a time. SparkAmerica brings people,
                            organizations, and cities together on a single tech platform to participate in our free and fun annual
                            calendar of challenges that encourage individual achievement while driving participation in friendly
                            competition. Covering areas from weight loss to financial health to getting and staying active, we
                            provide an easy-to-use system for tracking progress. From personal stats to city leaderboards, we
                            make it easy to build motivation and keep getting healthier.  </Text>
                    </Stack>
                </Box>
            </Box>
            <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/11/colorband.jpg'></Image>
        </>
    )
}
