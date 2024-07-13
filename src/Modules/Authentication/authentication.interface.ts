export interface Tuser{
    name: string,
    email: string,
    password:string,
    phone:string,
    role: "user" | "admin",
    address:string
}

export interface TuserLogin{
    email:string,
    password:string
}