import { Header } from "../../components/Header/Header";
import { LeadTable } from "../../components/LeadTable";
import { LoginVerify } from "../../components/User/LoginVerify";
import "../../styles/leadView.css"

export function LeadView () {
    return (
        <div className="page">
            <LoginVerify path="/"/>
            <Header/>
            <p className="pageTitle">Painel de Leads</p>
            <LeadTable/>
        </div>
    )
}