import React from 'react'
import Link from 'next/link'

const NavBar = () => {
  return (
    <nav className='flex justify-between w-12/12 bg-slate-500 p-5'>
        <Link href={"/"}>Home</Link>
        <Link href={"/admin"}>Admin</Link>
        <Link href={"/products"}>Products</Link>
        <Link href={"/users"}>Users</Link>
        <Link href={"/posts"}>Posts</Link>
    </nav>
  )
}

export default NavBar