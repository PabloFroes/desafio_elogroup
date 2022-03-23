import React from "react";
import '../user.css'
import { Logo } from "../../Logo";

export function Register(){


    return (
        <div className="background register">
            <Logo/>
            <form>
                <div className="formInput">
                    <label>Usuário *</label>
                    <br/>
                    <input required></input>
                    <br/>
                    <label>Password *</label>
                    <br/>
                    <input required></input>
                    <br/>
                    <label>Confirmar Password *</label>
                    <br/>
                    <input required></input>
                    <br/>
                </div>
                <button type="submit">Registrar</button>
            </form>
        </div>
    )
}