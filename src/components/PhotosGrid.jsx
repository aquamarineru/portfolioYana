import React from 'react'

const PhotosGrid = ({children}) => {
  return (
    <div className='px-7 flex flex-col justify-center items-center md:px-10'>
      <div className='grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3'>
        {children}
      </div>
    </div>
  )
}

export default PhotosGrid
