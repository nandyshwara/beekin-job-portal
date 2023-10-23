import React from 'react'
import SignupForm from '../components/userAuth/SignupForm'

function Signup({setRender}) {
  return (
    <div><SignupForm setRender={setRender}/></div>
  )
}

export default Signup