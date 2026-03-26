import { useContext, createContext, type FC, type ReactNode, useState } from "react";
import type { userType } from "../lib/types";

interface thisUserContextType {
    token: string,
    thisUser: userType,
    setAuth: (token: string, user: userType) => void,
    logout: () => void
}

const initState: thisUserContextType = {
    token: "",
    thisUser: {
        name: '',
        email: '',
    },
    setAuth: () => {},
    logout: () => {}
}


const thisUserContext = createContext<thisUserContextType>(initState)


export const ThisUserContextProvider: FC<{children: ReactNode}> = ({children}) => {

    const [token, setToken] = useState<string>('')
    const [thisUser, setThisUser] = useState<userType>(initState.thisUser)

    const setAuth = (token: string, user: userType) => {
        setToken(token)
        localStorage.setItem('token', token)
        setThisUser(user)
        localStorage.setItem('user', JSON.stringify(user))
    }

    const logout = () => {
        setToken('')
        localStorage.removeItem('token')
        setThisUser(initState.thisUser)
        localStorage.removeItem('user')
    }

    return (
        <thisUserContext.Provider value={{token, thisUser, setAuth, logout}} >
            {children}
        </thisUserContext.Provider>
    )

}

export const useAuth = () => {
    const context = useContext(thisUserContext)
    return context
}