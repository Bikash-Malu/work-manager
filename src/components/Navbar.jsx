"use client";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  console.log("testing");
  return <nav className="bg-blue-600 h-14 py-2 px-3 flex justify-between text-white items-center">

    <div className="brand"><Link href={'/'}>Work Manager</Link></div>
    <div className="">
        <ul className="flex space-x-8">
            <Link href={'/'}><li>Home</li></Link>
            <Link href={'/'}><li>Add Task</li></Link>
            <Link href={'/'}><li>Show Task</li></Link>
           
        </ul>
    </div>
    <div className=""><ul className="flex space-x-8">
            <Link href={'/'}><li>Login</li></Link>
            <Link href={'/'}><li>Sign up</li></Link>
           
        </ul></div>
  </nav>

};

export default Navbar;
