import Feed from "./components/Feed"
import NavBar from "./components/NavBar"
import Login from "./components/Login"
import { useAuth } from "./context/thisUserContext"
import { useEffect } from "react"
import { useNavigate, Routes, Route } from "react-router-dom"
import Article from "./components/Article"

function App() {
 const { token } = useAuth()
 const navigate = useNavigate()

 useEffect(() => {
  if(token){
    navigate('/')
  } else {
    navigate('/login')
  }
 }, [token])

  return (
    <>
    <Routes>   
      <Route path="/" element={
      <>
      <NavBar />
      <Feed text='The Latest Good News' />
      </>
      } />

      <Route path="/login" element={ <Login />} />

      <Route path="/article/:id" element={ <Article />} />

    </Routes> 
    </>
  )
}

export default App
