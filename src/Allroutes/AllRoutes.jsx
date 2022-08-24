import React from 'react'
import { Routes, Route } from "react-router-dom"
import Home from '../Home/Home'
import JoinTheMovement from '../SparkCities/JoinTheMovement'
import SparkPartners from '../SparkPartners/SparkPartners'

// import Navbar from './Navbar.tsx'
export default function AllRoutes() {
    return (
        <>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/join-the-movement' element={<JoinTheMovement />} />
                <Route path='/spark-partners' element={<SparkPartners />} />
            </Routes>
        </>
    )
}
