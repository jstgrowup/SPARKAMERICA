import { Flex } from '@chakra-ui/react'
import React from 'react'


import SparkCities from './SparkCities'
import BelowNav from './BelowNav'
import SomethingForEveryone from './SomethingForEveryone'
import PeopleOne from './PeopleOne'
import HomeFooter from './CommonFooter'
export default function Home() {

  return (
    <Flex direction={"column"} align={"center"}>
      <BelowNav />
      <SparkCities />
      <SomethingForEveryone />
      <PeopleOne />
      <HomeFooter />






    </Flex>
  )
}
