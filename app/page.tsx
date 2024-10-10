'use client'
import Image from 'next/image'
import Link from 'next/link'
import ProductCard from './components/ProductCard/ProductCard'
import { getServerSession } from 'next-auth'
// import { authOtpions } from './api/auth/[...nextauth]/route'

import { useState } from 'react'
import dynamic from 'next/dynamic'

const HeavyComponent = dynamic( () => import('./components/HeavyComponent') )

export default function Home() {
  // const session = await getServerSession(authOtpions)
  const [isVisible, setVisible] = useState(false)
  return (
      <main>
        {/* <h1>Hello {session && <span>{session.user?.name}</span>}</h1> */}
        <Link href={"/users"}>Users</Link>
        <ProductCard />
        <button onClick={() => setVisible(true)} >Show</button>
        {isVisible && <HeavyComponent />}
      </main>
  )
}
