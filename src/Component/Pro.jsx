// import { Children } from 'react'
import {Navigate} from 'react-router-dom'

const User = ({children}) =>{
    const token = localStorage.getItem("token")
    const user =  JSON.parse(localStorage.getItem("user"))

    if (!token){
        return <Navigate to="/log" />
    }

    

    return children
}

export default User