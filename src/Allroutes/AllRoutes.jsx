import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from './Home'

// import Navbar from './Navbar.tsx'
export default function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home/>}/>
               

            </Routes>
        </>
    )
}
