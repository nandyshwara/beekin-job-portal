import React from 'react'
import Slogan from '../components/Slogan'
import Listings from '../components/listings/Listings'

function Home() {
  return (
    <div className='mb-[5rem]'>
        <Slogan/>
        <Listings/>
    </div>
  )
}

export default Home