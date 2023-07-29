import React from 'react'

const Footer = () => {
  return (
    <div className="py-10 md:m-0">
      <div className="container mx-auto text-center">
        <p className="text-sm text-dark dark:text-light">
          &copy; {new Date().getFullYear()} All rights reserved.
        </p>
        <p className="text-xs mt-2 text-dark dark:text-light">
          Created by <a href="https://codecrafters.online" target="_blank" rel="noopener noreferrer" className="underline">codecrafters.online</a>
        </p>
      </div>
    </div>
  )
}

export default Footer
