import React from "react";
import '../../styles/user.css'

export function Login(){


    return (
        <div className="background">
            <div className="logo">
                <span className="elo">ELO</span><span className="group">GROUP</span>
            </div>
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
                <button type="submit">Logar</button>
            </form>
            <button>Registrar</button>
        </div>
    )
}

export default Login