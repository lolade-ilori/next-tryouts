import { notFound } from 'next/navigation'
import React from 'react'

// Accessing props with TS interfaces
interface Props {
    // This object contains all our routes parameters
    params: {id: number}
}

const UserDetailPage = ({params: {id}}: Props) => {

  if (id > 10) notFound()

  return (
    <div> UserDetailPage {id}</div>
  )
}

export default UserDetailPage