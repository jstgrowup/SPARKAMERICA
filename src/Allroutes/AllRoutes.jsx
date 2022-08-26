import React from 'react'
import { Routes, Route } from "react-router-dom"
import Calender from '../AnnualCalender/Calender'
import ContactUs from '../ContactUs/ContactUs'
import HealthApp from '../Healthapp/HealthApp'
import Home from '../Home/Home'
import AccountLogin from '../Register/AccountLogin'
import Register from '../Register/Register'
import SignupPage from '../Signup/SignupPage'
import Thankyou from '../Signup/Thankyou'
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
                <Route path='/annual-challenge-calender' element={<Calender />} ></Route>
                <Route path='/peopleonehealth-app' element={<HealthApp />}></Route>
                <Route path='/contactus' element={<ContactUs />}></Route>
                <Route path='/register' element={<Register />}></Route>
                <Route path='/accountLogin' element={<AccountLogin />} ></Route>
                <Route path='/signup' element={<SignupPage />}></Route>
                <Route path='/thankyoupage' element={<Thankyou />}></Route>
            </Routes>
        </>
    )
}
