import { useState } from 'react'
import { HomeIcon, InformationCircleIcon, TableCellsIcon, BookOpenIcon, MusicalNoteIcon, LinkIcon } from '@heroicons/react/24/solid'
import Logo from "../assets/images/BeerTopia.png"
import { Link } from "react-router-dom"
import LoginButton from './LoginButton'

function Sidebar() {

  return (
    <div className="top-0 right-0 fixed bg-[#38b6ff] w-[4vw] h-full z-10 items-center">
        <img className='px-1' src={Logo} alt="" />
        <ul>
            <li>
                <Link to="/">
                    <HomeIcon className='text-black p-4 hover:text-white'/>
                </Link>
            </li>
            <li>
                <Link to="/About">
                    <InformationCircleIcon className='text-black p-4 hover:text-white'/>
                </Link>
            </li>
            <li>
                <Link to="/Dashboard">
                    <TableCellsIcon className='text-black p-4 hover:text-white'/>
                </Link>
            </li>
            <li>
                <Link to="/Resources">
                    <BookOpenIcon className='text-black p-4 hover:text-white'/>
                </Link>
            </li>
            <li>
                <Link to="/Songs">
                    <MusicalNoteIcon className='text-black p-4 hover:text-white'/>
                </Link>
            </li>
            <li>
                <Link to="/Brewery">
                    <LinkIcon className='text-black p-4 hover:text-white'/>
                </Link>
            </li>
            <li>
                <LoginButton />
            </li>
        </ul>




    </div>
    
  )
}

export default Sidebar