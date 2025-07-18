import React from 'react'
import { Container, Logo, LogoutBtn } from '../index'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Header() {
  const authStatus = useSelector((state) => state.auth.status)
  const userData = useSelector((state) => state.auth.userData)
  const navigate = useNavigate()
  const navItems = [
    {
      name: 'Home',
      slug: "/",
      active: true
    },
    {
      name: "Log In",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Sign Up",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "My Posts",
      slug: "/my-posts",
      active: authStatus,
    },
    {
      name: "Add Post",
      slug: "/add-post",
      active: authStatus,
    }
  ]

  return (
    <header className='py-3 shadow bg-blue-950 rounded-md'>
      <Container>
        <nav className='flex  '>
          <div className='mr-4 '>
            <Link to="/">
              <Logo width='70px' />
            </Link>
          </div>
          <ul className='flex ml-auto'>
            {authStatus && (

              <li className="flex items-center text-white text-xl font-semibold mr-4">
                {userData.name}
              </li>

            )}
            {navItems.map((item) => item.active ? (
              <li key={item.name}>
                <button
                  onClick={() => navigate(item.slug)}
                  className='inline-block mt-4 mx-2 px-6 py-2 duration-200 outline-1 shadow-sm shadow-indigo-500 bg-indigo-200 hover:bg-indigo-300 rounded-full cursor-pointer'
                > {item.name}</button>
              </li>
            ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  )
}

export default Header