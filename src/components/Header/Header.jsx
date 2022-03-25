import { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../services/users";
import { Logo } from "../Logo";
import "./header.css"

export function Header() {

    const [redirectToLogin, setRedirectToLogin] = useState(false)

    async function logout () {
        try {
           await UsersService.logout() 
           setRedirectToLogin(true)
        } catch (error) {
            console.log(error)
        }
    }
    if(redirectToLogin){
        return <Navigate to="/"/>
    }

    return(
        <div className="header">
            <Logo/>
            <button className="logout" onClick={logout}>Sair</button>
        </div>
    )
}