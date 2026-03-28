import { useState } from 'react' 
import { useAuth } from '../context/thisUserContext'

function NavBar() {

  const { logout } = useAuth()

  const [showMenu, setShowMenu] = useState<boolean>(false)
  return (
    <div className='bg-gray-300 flex-row flex justify-between p-2 relative max-w-screen z-10'>

        <div className='flex flex-row items-center cursor-default'>
           <h1  className='bungee text-3xl'>Glad</h1> 
            </div>

        <div className='flex flex-row justify-around items-center cursor-pointer'>
            <nav className=' text-2xl font-bold poppins mx-3 p-2 border-b-3 border-blue-700 '>Home</nav>
            <nav className=' text-2xl font-bold poppins mx-3 p-2 '>Tech</nav>
            <nav className=' text-2xl font-bold poppins mx-3 p-2 '>Envrinonment</nav>
            <nav className=' text-2xl font-bold poppins mx-3 p-2 '>Health</nav>
            <nav className=' text-2xl font-bold poppins mx-3 p-2 '>Industry</nav>
        </div>

        <div onClick={logout} className={`absolute right-17 cursor-pointer hover:bg-gray-800 transition-all duration-200 top-3 bg-gray-700 rounded-2xl ${ showMenu ? "" : "hidden"} `}>
          <div className='font-semibold text-white p-3'>Logout</div>
        </div>

        <div className=' mr-2 rounded-full flex justify-center items-center' onClick={() => setShowMenu(prev => !prev)}>
          <svg width="" height="" viewBox="-2.08 -2.08 20.16 20.16" xmlns="http://www.w3.org/2000/svg" fill="#000000" className=" w-10 h-10  border border-black rounded-sm p-0" stroke="#000000" strokeWidth="0.00016" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)">

            <g id="SVGRepo_bgCarrier" strokeWidth="0"/>

            <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" stroke="#CCCCCC" strokeWidth="0.608"/>

            <g id="SVGRepo_iconCarrier"> <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/> </g>

          </svg>
        </div>

    </div>
  )
}

export default NavBar
