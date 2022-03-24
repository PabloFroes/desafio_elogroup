import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeadService from "../../services/lead";
import "./leadTable.css"


export function LeadTable () {

    const [leads, setLeads] = useState([])

    
    useEffect(() => {
        async function fetchLeads () {
            const response = await LeadService.get();
            if(response !== null){
                setLeads(response)
            }
        }
        fetchLeads();
    },[]);

    return(
        <div className="container">
            <Link to="/lead-create">
                <button>Novo Lead +</button>   
            </Link>
            <table className="leadTable">
                <thead className="leadThead">
                    <tr>
                        <th>Cliente em Potencial</th>
                        <th>Dados Confirmados</th>
                        <th>Reunião Agendada</th>
                    </tr>
                </thead>
                <tbody>
                    {leads.map((item,key) =>
                        <tr key={key} className="trLead">
                            <td className="tdLead">{item.Status === "Cliente em Potencial" ? item.name : ""}</td>
                            <td className="tdLead">{item.Status === "Dados Confirmados" ? item.name : ""}</td>
                            <td className="tdLead">{item.Status === "Reunião Agendada" ? item.name : ""}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

