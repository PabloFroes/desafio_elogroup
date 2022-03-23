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
    const [error, setError] = useState("")

    const error_confirmPassword = "Password e confirmação devem ser iguais"

    const HandleSubmit = async (evt) => {
        evt.preventDefault()
        try {
            if(confirmPassword === password){
                await UsersService.register(username,password)
                setRedirectToLogin(true)
            }else {
                throw error_confirmPassword
            }
        } catch (error){
            setError(error)
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
                    <input name="password" type="password" required value={password} onChange={e => setPassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#]).{8,}" title="Password deve possuir ao menos 8 caracteres, contendo ao menos um carácter especial, um carácter numérico, um carácter alfanumérico"></input>
                    <br/>
                    <label>Confirmar Password *</label>
                    <br/>
                    <input name="confirmPassword" type="password" required value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#]).{8,}" title="Password deve possuir ao menos 8 caracteres, contendo ao menos um carácter especial, um carácter numérico, um carácter alfanumérico"></input>
                    <br/>
                </div>
                <p className="error">{error ? error : ""}</p>
                <br/>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}