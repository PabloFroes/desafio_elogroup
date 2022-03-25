import { Header } from "../../components/Header/Header"
import { LeadCreateForm } from "../../components/LeadCreateForm"
import { LoginVerify } from "../../components/User/LoginVerify"
import "../../styles/leadView.css"

export function LeadCreateView () {
    return(
        <div className="page">
            <LoginVerify path="/"/>
            <Header/>
            <p className="pageTitle">Novo Lead</p>
            <LeadCreateForm/>
        </div>
    )
}