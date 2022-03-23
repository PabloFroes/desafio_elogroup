import React from "react";
import { Logo } from "../../Logo";
import '../user.css'

export function Login(){


    return (
        <div className="background">
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
                </div>
                <button type="submit">Entrar</button>
            </form>
            <button>Registrar</button>
        </div>
    )
}