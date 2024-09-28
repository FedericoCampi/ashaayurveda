import React from 'react'
import { InfiniteCards } from './InfiniteCards'

const Clients = () => {
  return (
    <div className='pt-20'>
      <p className='text-center text-4xl mainColorText'>
        Nuestros clientes dicen
      </p>
      <InfiniteCards/>
    </div>
  )
}

export default Clients
