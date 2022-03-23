import React, { useState } from "react";
import '../user.css'
import { Logo } from "../../Logo";
import UsersService from "../../../services/users";
import { Navigate } from "react-router-dom";

export function Register(){

    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[confirmPassword, setConfirmPassword] = useState("");
    const [redirectToLogin, setRedirectToLogin] = useState(false)

    const HandleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            console.log(username,password)
            if(confirmPassword === password){
                await UsersService.register(username,password)
                console.log("register complete")
                setRedirectToLogin(true)
            }else {
                console.log("wrong confirmPassword")
            }
        } catch (error){
            console.log(error)
        }
    }

    if(redirectToLogin){
        return <Navigate to="/"/>
    }


    return (
        <div className="background register">
            <Logo/>
            <form onSubmit={HandleSubmit}>
                <div className="formInput">
                    <label>Usuário *</label>
                    <br/>
                    <input name="username" required value={username} onChange={e => setUsername(e.target.value)}></input>
                    <br/>
                    <label>Password *</label>
                    <br/>
                    <input name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
                    <br/>
                    <label>Confirmar Password *</label>
                    <br/>
                    <input name="confirmPassword" type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input>
                    <br/>
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}