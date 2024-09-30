'use client'
import React from 'react'
import Link from 'next/link'
import { useSession } from 'next-auth/react'

const NavBar = () => {
  const {status, data: session} = useSession() 
  return (
    <nav className='flex justify-between w-12/12 bg-slate-500 p-5'>
        <Link href={"/"}>Home</Link>
        <Link href={"/admin"}>Admin</Link>
        {/* <Link href={"/products"}>Products</Link> */}
        <Link href={"/users"}>Users</Link>
        <Link href={"/posts"}>Posts</Link>
        <Link href={"/reset"}>Reset</Link>
        { status === 'authenticated' && 
          <div>
            {session.user?.name}
            <Link href={"/api/auth/signout"} className='ml-3'>Sign Out</Link>
          </div>
        }
        { status === 'unauthenticated'  && <Link href={"/api/auth/signin"}>Login</Link>}
    </nav>
  )
}

export default NavBar