import React, { useState } from 'react'

function Alerta({children}) {
  return (
    <div className='bg-red-600 p-3 text-center rounded-md mb-3 uppercase'>
        <p className='font-bold text-white'>{children}</p>
    </div>
  )
}

export default Alerta