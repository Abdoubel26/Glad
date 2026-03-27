import type { userType } from "./types"

const url = "http://localhost:5000/api"
 

// accounts

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

// posts

export const getPosts = async () => {
    const res = await fetch(`${url}/post/all`, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    return res.json()
}

// Likes 

export const getLikes = async () => {
    const res = await fetch(`${url}/like/get`, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    return res.json()
}

export const toggleLike = async (token: string, postId: string) => {
    const res = await fetch(`${url}/like/toggle`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({postId: postId})
    })
    return res.json()

}


// Saves

export const getSaves = async () => {
    const res = await fetch(`${url}/save/get`, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
    })
    return res.json()
}


export const toggleSave = async (token: string, postId: string) => {
    const res = await fetch(`${url}/save/toggle`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "authorization": `Bearer ${token}`
        },
        body: JSON.stringify({postId: postId})
    })
    return res.json()
}


