import React from 'react'

export default function layoutAuth({ children }: {children : React.ReactNode}) {
  return (
    <div className='flex flex-col justify-center h-full items-center'>
        <p>Dashboard</p>
        <h1 className='text-3xl my-2'>Bienvenidos</h1>
        <h2 className='text-2xl mb-3'>Comapy dashboard</h2>
        {children}
    </div>
  )
}
