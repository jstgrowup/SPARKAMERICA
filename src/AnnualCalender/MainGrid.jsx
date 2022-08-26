import React from 'react'
import { Box, Button, Center, Flex, Heading, Image, SimpleGrid, Text } from '@chakra-ui/react'
import MGCompo from './MGCompo'

export default function MainGrid() {
    return (
        <>
            <Center w={"100%"} minH={"2088px"} mt="5px" mb={"30"}>
                <SimpleGrid maxW={"80%"} columns={[1, 1, 2, 3]} spacing={"5"}  >
                    <MGCompo head1={"30-DAY"} head2={'HEALTHY WEIGHT'} text1={"New ways to think about what"} text2={"you eat and how you move"} text3={"January 1-31"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_January.jpg" />

                    <MGCompo head1={"HEALTHY"} head2={'HEART'} text1={"Simple habit changes to keep"} text2={"your ticker in peak condition"} text3={"February 1-28"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_February.jpg" />
                    <MGCompo head1={"MANEGE STRESS"} head2={'MINDFULLY'} text1={"Mindfulness practice to help you "} text2={"deal with all life's demands"} text3={"March 1-31"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_June.jpg" />
                    <MGCompo head1={"SPRING INTO"} head2={'SHAPE'} text1={"Spring clean your fitness routine,"} text2={"become an exerciser for life"} text3={"April 1-14"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2022/01/Calendar_Spring.jpg" />
                    <MGCompo head1={"SPRING FIT CITY"} head2={'CHALLENGE'} text1={"Fitness tracking,leaderborads"} text2={"and friendly competition"} text3={"April 15-May 31"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_FitCity1.jpg" />
                    <MGCompo head1={"FIT & HEALTHY"} head2={'LEADERSHIP'} text1={"Learn about goal-setting,tool"} text2={"for success and leadership"} text3={"June 1 -30"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_March.jpg" />
                    <MGCompo head1={"HEALTHY SUMMER"} head2={'HABITS'} text1={"A little in nature will benefit"} text2={"you in big ways"} text3={"July 1-31"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_April.jpg" />
                    <MGCompo head1={"ACHIEVING FINANCIAL"} head2={'FREEDOM'} text1={"Get your finances in shape with"} text2={"healthy budgeting habits"} text3={"August 1-31"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_July.jpg" />
                    <MGCompo head1={"FALL FIT CITY"} head2={'CHALLENGE'} text1={"Fitness tracking,leaderboards"} text2={"and friendly competition"} text3={"September 1-october 15"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_July.jpg" />
                    <MGCompo head1={"SLIP INTO"} head2={'SLUMBER'} text1={"Better sleep habits,relaxation"} text2={"techniques,and sleep hygiene"} text3={"October 16 -31"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_October.jpg" />
                    <MGCompo head1={"HEALTHY HOLIDAYS"} head2={'HELPING HANDS'} text1={"Set realistic goals while having"} text2={"an impact on those around you"} text3={"November 1-30"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_November.jpg" />
                    <MGCompo head1={"CREATE A POSITIVE"} head2={'MINDSET'} text1={"Learn the importance"} text2={"gratitude and positive thinking"} text3={"December 1-31"} img="https://secureservercdn.net/45.40.145.201/79x.0e9.myftpupload.com/wp-content/uploads/2020/12/Calendar_August.jpg" />





                </SimpleGrid>
            </Center>

        </>
    )
}
