import React from 'react'
import { useDispatch } from 'react-redux'
import authService from '../../appwrite/auth'
import { logout } from '../../store/authSlice'

function LogoutBtn() {
  const dispatch = useDispatch();
  const logoutHandler = () => {
    authService.logout().then(() => {
      dispatch(logout())
    })
  }

  return (
    <button
      className='inline-bock px-6 py-2 mx-2 mt-4 duration-200 
      shadow-sm outline-1 shadow-amber-100 bg-orange-200 cursor-pointer
      hover:bg-orange-300 rounded-full'
      onClick={logoutHandler}
    >Log Out</button>
  )
}

export default LogoutBtn