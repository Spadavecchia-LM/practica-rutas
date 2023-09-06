import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
    <NavLink to={`/category/1`}>categoria 1</NavLink>
    <NavLink to={`/category/2`}>categoria 2</NavLink>
    <NavLink to={`/category/3`}>categoria 3</NavLink>

    </>
  )
}

export default NavBar