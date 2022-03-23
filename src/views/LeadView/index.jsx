import { Header } from "../../components/Header/Header";
import { LeadTable } from "../../components/LeadTable";
import "../../styles/leadView.css"

export function LeadView () {
    return (
        <div className="page">
            <Header/>
            <p className="pageTitle">Painel de Leads</p>
            <LeadTable/>
        </div>
    )
}