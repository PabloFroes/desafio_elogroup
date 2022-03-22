import React from "react";
import '../../styles/user.css'

export function Register(){


    return (
        <div className="background register">
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

export default Register