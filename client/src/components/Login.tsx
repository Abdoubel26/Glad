import { useState } from 'react'
import { login, signup } from '../lib/services'
import { useAuth } from '../context/thisUserContext'

type currStateType = 'Sign up' | 'Log in'

function Login() {
  const { setAuth } = useAuth()

    const [inputName, setInputName] = useState('')
    const [inputEmail, setInputEmail] = useState('')
    const [inputPassword, setInputPassword] = useState('')
    const [currState, setCurrState] = useState<currStateType>('Sign up')


    const handleSubmit =  async () => {
      if(currState === "Log in"){
        const response = await login(inputEmail, inputPassword)
        if(response.success) {
          setAuth(response.token, response.user)
        } else {
          alert(response.message)
        }

      } 
      else {
        const response = await signup({name: inputName, email: inputEmail, password: inputPassword})
        if(response.success) {
          setAuth(response.token, response.user)
        } else {
          alert(response.message)
        }
      }
    }

  return (
    <div className='flex flex-row justify-center h-screen items-center'>
        <div className='w-1/2 flex flex-col items-center justify-center'>

        <h1 className='text-6xl poppins font-bold'>The Internet, Better.</h1>
        <h2 className="text-5xl my-3 poppins font-bold">Only Good News.</h2>  
        </div>

        <div className='flex  w-1/2 flex-col justify-center h-full items-center p-10 pb-5'>
          <div className='flex flex-col items-center w-full px-10 py-5 h-full justify-center'>
            <form onSubmit={(e) => {
              e.preventDefault()
              handleSubmit()
              }}  className='flex gap-y-4 flex-col bg-gray-200 h-fit rounded-sm transition-all duration-200 00 w-full px-20 items-center p-10'>
              <div className='flex flex-row items-center cursor-default'>
                <h1  className='bungee text-4xl'>Glad</h1> 
              </div>
              <div className='w-full'><h1 className='text-3xl my-2 text-left outift font-bold'>{currState}</h1></div>
                <input onChange={(e) => setInputName(e.target.value)} value={inputName} type='text' placeholder='Full Name' className={` ${ currState === "Log in" ? 'hidden' : ' bg-cyan-50 p-2 rounded-xl w-full pl-3 outline-none'} `} />
                <input onChange={(e) => setInputEmail(e.target.value)} value={inputEmail}  type='email' placeholder='Email' className='  bg-cyan-50 p-2 rounded-xl w-full outline-none pl-3' />
                <input onChange={(e) => setInputPassword(e.target.value)} value={inputPassword}   type='password' placeholder='Password' className='bg-cyan-50 p-2 rounded-xl w-full outline-none pl-3' />
                { currState === 'Sign up' ? <p>Already Have an account? <span onClick={() => setCurrState('Log in')} className=' text-blue-700 cursor-pointer hover:underline'>Log in</span></p> : <p>Don't Have an acount? <span onClick={() => setCurrState('Sign up')} className=' text-blue-700 cursor-pointer hover:underline'>Sign up</span></p>}
                <button type='submit' className=' text-xl px-14 py-3 mt-2 rounded-sm shadow shadow-white transition-all duration-200 hover:shadow-[9px_9px_0px] active:shadow-[0px_0px_0px] bungee border-2 borderwhite text-white bg-black '>
                  Submit
                </button>
            </form>
          </div>    
          <h3 className='text-lg poppins font-medium'>News That doesn't Drain you</h3>
        </div>
    </div>
  )
}

export default Login
