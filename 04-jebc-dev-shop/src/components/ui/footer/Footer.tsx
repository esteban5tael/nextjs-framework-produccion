import React from 'react'

export const Footer = () => {
  return (
    <div className='m-2 p-4 flex justify-center items-center'>
        <span className='text-sm text-gray-400 font-semibold'>&copy; {new Date().getFullYear()} Jebc Dev Shop. All rights reserved.</span>
    </div>
  )
}
