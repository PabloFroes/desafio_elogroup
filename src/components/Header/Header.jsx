import { Logo } from "../Logo";
import "./header.css"

export function Header() {
    return(
        <div className="header">
            <Logo/>
            <button className="logout">Sair</button>
        </div>
    )
}