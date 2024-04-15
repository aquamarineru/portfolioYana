import React from 'react'
import Link from 'next/link'

function Error404() {
  return (
    <div className="flex items-center justify-center flex-col h-screen text-center font-sans text-gray-500 m-0">
            <h1 className="text-4xl inline-block pr-3 animate-type">Error 404</h1>
            <Link href="/" aria-label="Go back to the home page"  className='mt-10 px-8 py-2 text-light border bg-tomatoes border-tomatoes rounded hover:bg-hover hover:border-none font-nanum uppercase'> Go back </Link>
    </div>
  )
}

export default Error404
