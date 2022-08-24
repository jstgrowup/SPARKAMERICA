import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Home/Home'
import JoinTheMovement from '../SparkCities/JoinTheMovement'

// import Navbar from './Navbar.tsx'
export default function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/join-the-movement' element={<JoinTheMovement />} />

            </Routes>
        </>
    )
}
