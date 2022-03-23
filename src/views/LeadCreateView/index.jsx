import { Header } from "../../components/Header/Header"
import { LeadCreateForm } from "../../components/LeadCreateForm"
import "../../styles/leadView.css"

export function LeadCreateView () {
    return(
        <div className="page">
            <Header/>
            <p className="pageTitle">Novo Lead</p>
            <LeadCreateForm/>
        </div>
    )
}