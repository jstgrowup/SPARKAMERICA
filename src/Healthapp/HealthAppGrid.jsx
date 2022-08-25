import React from 'react'
import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import { Icon } from "@chakra-ui/icons"
import { Link } from "react-router-dom"
const CircleIcon = (props) => (
    <Icon viewBox='0 0 200 200' {...props} >
        <path
            fill='currentColor'
            d='M 100, 100 m -75, 0 a 75,75 0 1,0 150,0 a 75,75 0 1,0 -150,0'
        />
    </Icon>
)
export default function HealthAppGrid() {
    return (
        <>
            <Center w={"100%"} minH={"1697px"} mt="5px" mb={"30"}>
                <SimpleGrid maxW={"80%"} columns={[1, 1, 2, 2]} spacing={"5"}  >
                    <Box>
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_FitnessGameMain.jpg' alt='okay'></Image>
                    </Box>
                    <Flex minH={"325px"} p={"30px"} direction={"column"} gap="25px"  align="flex-start">

                        <Heading size={"lg"} color="#222222"
                            fontWeight="semibold"
                            fontFamliy="sans-serif">THE PEOPLE HEALTH APP WEBSITE</Heading>
                        <Text fontWeight={"medium"} noOfLines={[10, 6, 2]}>
                            The <Link style={{ color: "blue" }} to={"/accountLogin"}>PeopleOne Health App Website</Link> is a feature rich technology tool used
                            to do things like:
                        </Text>
                        <Text  noOfLines={[13, 7, 4]} >

                            <CircleIcon boxSize={"2"} /> {"   "}Track user progress during challenges
                            <br />
                            <CircleIcon boxSize={"2"} /> {"    "} Receive updates and access resources like helpful articles and videos that can boost your health journey
                            <br />
                            <CircleIcon boxSize={"2"} />{"    "} View Leaderboards during challenges that incorporate friendly competition
                            <br />
                            <CircleIcon boxSize={"2"} />{"   "} Access the Fitness Game and track daily habits and goals

                        </Text>

                    </Flex>
                    <Flex minH={"325px"} p={"30px"} direction={"column"} gap="25px"  align="flex-start">

                        <Heading size={"lg"} color="#222222"
                            fontWeight="semibold"
                            fontFamliy="sans-serif">THE PEOPLE HEALTH MOBILE APP</Heading>
                        <Text fontWeight={"medium"} noOfLines={[24, 20, 15, 7]}>
                            SparkAmerica participants can also use the PeopleOne Health Mobile app to track
                            their progress during challenges. The app can be downloaded for free for both iPhone
                            and Android devices from the iOS App Store or the Google App Store, and utilizes the
                            same easy-to-use features and amazing resources as the desktop portal.

                        </Text>
                        <Text>Additionally , the PeopleOne Health app syncs with:</Text>
                        <Text Text noOfLines={[13, 7, 4]} >

                            <CircleIcon boxSize={"2"} /> {"   "}Track user progress during challenges
                            <br />
                            <CircleIcon boxSize={"2"} /> {"    "} Receive updates and access resources like helpful articles and videos that can boost your health journey
                            <br />
                            <CircleIcon boxSize={"2"} />{"    "} View Leaderboards during challenges that incorporate friendly competition
                            <br />
                            <CircleIcon boxSize={"2"} />{"   "} Access the Fitness Game and track daily habits and goals

                        </Text>
                        <Text noOfLines={[15, 10, 5]}>
                            This feacture makes it more convinient to log Active Minutes.Users can also manually
                            enter their minutes and activities in the Fitness Game
                        </Text>
                    </Flex>
                    <Center>
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_AppHomeScreen.jpg' alt='okay'></Image>
                    </Center>
                    <Center>
                        <Image src='https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2021/09/POH_FitnessGameMobile.jpg' alt='okay'></Image>
                    </Center>
                    <Flex minH={"325px"} p={"30px"} direction={"column"} gap="25px"  align="flex-start">

                        <Heading size={"lg"} color="#222222"
                            fontWeight="semibold"
                            fontFamliy="sans-serif">THE FITNESS GAME</Heading>
                        <Text  noOfLines={[30, 25, 17, 10]}>
                            The Fitness Game lives inside of the PeopleOne Health portal to
                            help users see their progress in a fun and convenient format.
                            Every day the game will sync with your mobile health app or you
                            can enter your Active Minutes manually. It's as easy as putting in
                            the number of minutes, the Activity Description, and hitting the
                            Add Minutes button. Then "Pow!", you'll see your minutes added
                            and as you scroll down you can also see your history and
                            streaks.

                        </Text>

                    </Flex>


                </SimpleGrid>
            </Center>




        </>
    )
}
