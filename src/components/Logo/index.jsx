import React from "react"
import { Link } from "react-router-dom"
import "./logo.css"

export function Logo() {


    return (
        <Link to="/">
            <div className="logo">
                <span className="elo">ELO</span><span className="group">GROUP</span>
            </div>
        </Link>
    )
}