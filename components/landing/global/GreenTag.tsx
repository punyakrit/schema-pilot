import React from 'react'

function GreenTag({children}: {children: React.ReactNode}) {
  return (
    <div className='border bg-green-500/5 border-green-500 text-green-500 px-2 py-1 text-xs rounded-full'>
        {children}
    </div>
  )
}

export default GreenTag