import React, { useState } from "react";
import { Link } from "react-router-dom";
import menu from '../assets/menu.png'

export const Navbar = () => {
    const [Nav, setNav] = useState('navclose')

    return(
        <nav className="flex flex-row h-20 bg-blue-950 text-white justify-between w-full items-center px-4">
            <div>
                <h1 className="text-2xl">ShortAPX</h1>
                <p className="text-sm">The Most Reliable URL Shortner so Far</p>
            </div>
            <img src={menu} onClick={() => {
                Nav == 'navclose' ? setNav('navopen') : setNav('navclose')
            }} className="w-8 z-10" alt="" />
            <ul className={Nav}>
                <Link to={'/'}><li className="py-4">Home</li></Link>
                <Link to={'/dashboard'}><li className="py-4">Dashboard</li></Link>
                <li className="py-4">About</li>
                <li className="py-4">Contact</li>   
                <li className="py-4">Github</li>
                <Link to='/'><li className="px-10 py-2 my-4 rounded-lg bg-blue-500 border border-blue-300">Try</li></Link>
            </ul>
        </nav>
    )
}