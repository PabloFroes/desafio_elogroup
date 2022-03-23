import React from "react";
import "./leadTable.css"


export function LeadTable () {
    return(
        <div className="container">
            <button>Novo Lead +</button>
            <table>
                <thead>
                    <tr>
                        <th>Cliente em Potencial</th>
                        <th>Dados Confirmados</th>
                        <th>Reunião Agendada</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Cliente</td>
                        <td>Dados</td>
                        <td>Reunião</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Dados</td>
                        <td></td>
                    </tr>
                    <tr>
                        <td>Cliente</td>
                        <td></td>
                        <td>Reunião Agendada</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

