import { useEffect, useState } from "react"
import { Navigate } from "react-router-dom"

export function LoginVerify (props) {

    const[userLogged, setUserLogged] = useState({})

    async function verifyUserLogged () {
        const userLogged = await localStorage.getItem("userLogged") 
        setUserLogged(userLogged)
    }
    useEffect(() => {
        verifyUserLogged();
    },[]);

    if(!userLogged){
        return <Navigate to={props.path}/>
    }
    return (null)

}