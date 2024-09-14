'use client'
import React from 'react'

interface Props {
    error: Error;
    retry: () => void
}

const ErrorPage = ({error, retry}: Props) => {
    console.log(error)

  return (
    <>
        <div>An unexpected error occured, we are sorry and we will work on it</div>
        <button className="btn" onClick={() => retry()}>Retry</button>
    </>

  )
}

export default ErrorPage