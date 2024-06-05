import React from 'react'
import { Outlet } from "react-router-dom"
import Navbar from '../components/Navbar'
const HomeLayout = () => {
    return (
        <div className="flex flex-col ">
            <Navbar />
            <Outlet />
        </div>
    )
}

export default HomeLayout