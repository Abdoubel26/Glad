export interface postType {
    id: string,
    image: string,
    title: string,
    subtitle: string,
    content: string,
    createdAt: string,
    category: string
}


export interface userType {
    id?: string, 
    name: string, 
    email: string,
    password?: string
}