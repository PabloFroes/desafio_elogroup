import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import UsersService from "../../../services/users";
import { Logo } from "../../Logo";
import '../user.css'

export function Login(){


    const[username, setUsername] = useState("");
    const[password, setPassword] = useState("");
    const[redirectToRegister, setRedirectToRegister] = useState(false)
    const[redirectToLeadTable, setRedirectToLeadTable] = useState(false)
    const [error, setError] = useState("")

    const HandleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            await UsersService.login(username,password)
            setRedirectToLeadTable(true)
        } catch (error){
            setError(error)
        }
    }  

    if(redirectToRegister){
        return <Navigate to="/register"/>
    }

    if(redirectToLeadTable){
        return <Navigate to="/lead-table"/>
    }


    return (
        <div className="background">
            <Logo/>
            <form onSubmit={HandleSubmit}>
                <div className="formInput">
                    <label>Usuário *</label>
                    <br/>
                    <input name="username" required value={username} onChange={e => setUsername(e.target.value)}></input>
                    <br/>
                    <label>Password *</label>
                    <br/>
                    <input  type="password" name="password" required value={password} onChange={e => setPassword(e.target.value)}></input>
                    <br/>
                </div>
                <p className="error">{error ? error : ""}</p>
                <br/>
                <button type="submit">Entrar</button>
            </form>
            <button onClick={e => setRedirectToRegister(true)}>Registrar</button>
        </div>
    )
}