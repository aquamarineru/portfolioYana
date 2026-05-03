import React from 'react'

const PhotosGrid = ({children}) => {
  const items = React.Children.toArray(children).filter(Boolean)
  const rowWidthClass = items.length === 1
    ? 'max-w-[360px]'
    : items.length === 2 || items.length === 4
      ? 'max-w-[752px]'
      : 'max-w-[1144px]'

  return (
    <div className='px-7 md:px-10'>
      <div className='mx-auto flex max-w-[1280px] flex-wrap justify-center gap-5 md:gap-8'>
        <div className={`flex w-full flex-wrap justify-center gap-5 md:gap-8 ${rowWidthClass}`}>
          {items.map((item, index) => (
            <div key={item.key || index} className="w-full" style={{flex: '0 1 360px'}}>
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default PhotosGrid
