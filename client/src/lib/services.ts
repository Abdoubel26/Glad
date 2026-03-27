import type { userType } from "./types"

const url = "http://localhost:5000/api"


export const signup = async (user: userType) => {
    const res = await fetch(`${url}/user/signup`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user)
    })
    return res.json()
}

export const login = async (email:string, password:string) => {
    const res = await fetch(`${url}/user/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({email, password})
        });
    return res.json()
}

export const getPosts = async () => {
    const res = await fetch(`${url}/post/all`, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    return res.json()
}
