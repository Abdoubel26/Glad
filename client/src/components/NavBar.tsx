import React from 'react'

function NavBar() {
  return (
    <div className='bg-gray-300 flex-row flex justify-between p-2'>

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

        <div className='border-2 rounded-full'><img src='https://randomuser.me/api/portraits/men/32.jpg' className='object-cover rounded-full w-15 h-15 cursor-pointer'></img></div>

    </div>
  )
}

export default NavBar
