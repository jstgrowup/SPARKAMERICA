import React, { useRef } from 'react'
import "./navbarstyles"
import { FaBars, FaTimes } from "react-icons/fa"
import { Box, Button, Link } from "@chakra-ui/react"
export default function Navbar() {
  const navRef = useRef()
  const showNavBar = () => {
    navRef.current.classList.toggle("responsive_nav")
  }
  return (
    <>
      <div>
        <Box>Logo</Box>
        <Box ref={navRef}>
          <Link margin={"0,2rem"} >okay</Link>
          <Link margin={"0,2rem"} >mywork</Link>

          <Link margin={"0,2rem"} >blog</Link>

          <Link margin={"0,2rem"} >About</Link>
          <button className='nav-btn nav-close-btn' onClick={showNavBar}>
            <FaTimes />
          </button>
        </Box>
        <Button className='nav-btn' onClick={showNavBar}>
          <FaBars />
        </Button>
      </div>


    </>
  )
}
