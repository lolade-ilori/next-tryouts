import React, { useState } from 'react'
import { sort } from 'fast-sort';
import Link from 'next/link';


interface User {
    id: number;
    name: string;
    email: string
}

interface Props {
    sortOrder: string
}

const UserTable = async ({sortOrder}: Props) => {
    const res = await fetch("https://jsonplaceholder.typicode.com/users", {next: {revalidate: 10}})
    const users: User[] = await res.json()
    
    // Query string Parameters are a way to pass states on the server

    const sorted = sort(users).asc(sortOrder === "email" ? (user) => user.email : (user) => user.name)

  return (
    <table className='table table-bordered'>
        <thead>
            <tr>
                <th>
                    <Link href={"/users?sortOrder=name"}>Name</Link>
                </th>
                <th>
                    <Link href={"/users?sortOrder=email"}>Email</Link>
                </th>
            </tr>
        </thead>

        <tbody>
            {sorted.map(user => <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
            </tr> )}
        </tbody>
        
    </table>
  )
}

export default UserTable