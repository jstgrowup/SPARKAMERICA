import { Box, Image } from '@chakra-ui/react'
import React from 'react'
import Navbar from './Navbar.tsx'
import "./Common.css"
export default function Home() {
  return (
    <>
      <Box height={"600px"} w="100%" backgroundImage="https://sparkamerica.com/wp-content/uploads/2020/12/HomeHeader1.jpg">
       
        <Navbar /> 
        <Box className='rest'>
          
        </Box>
      </Box>
      <></>


    </>
  )
}
