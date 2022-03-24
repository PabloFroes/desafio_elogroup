import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import LeadService from "../../services/lead";
import "./leadTable.css"


export function LeadTable () {

    const [leads, setLeads] = useState([])
    const [index,setIndex] = useState(0)
    const [indexTarget, setIndexTarget] = useState(0)
    const [row,setRow] = useState(0)
    const [rowTarget, setRowTarget] = useState(0)
    const status = ["Cliente em Potencial","Dados Confirmados","Reunião Agendada"]

    async function fetchLeads () {
        const response = await LeadService.get();
        if(response !== null){
            setLeads(response)
        }
    }
    
    useEffect(() => {
        fetchLeads();
    },[]);

    function sameRow (event) {
        if(row === rowTarget){
            return true
        }else {
            return false
        }
    }

    function drag (event,item,index) {
        setIndex(index)
        event.dataTransfer.setData("text", item.name);
        setRow(event.target.parentElement.parentElement.id);
    }


    function dragEnd (event){
        if(sameRow(event) && index < indexTarget){
            event.target.innerHTML = ""       
        }
    }

    function drop (event,item,status) {
            if(index < indexTarget && sameRow()){
                event.target.children[0].innerHTML= item.name
            }
    }
    function dragOver (event, indexTarget){
        setRowTarget(event.target.parentElement.id);
        event.preventDefault();
        setIndexTarget(indexTarget);
    }

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
                        <tr id={key} key={key} className="trLead">
                            <td className="tdLead" onDragOver={event => dragOver(event, 0)} onDrop={event => drop(event, item, status[0])}><p draggable="true" onDragStart={event => drag(event,item,0)} onDragEnd={event => dragEnd(event)}> {item.Status === status[0] ? item.name : ""}</p></td>
                            <td className="tdLead" onDragOver={event => dragOver(event, 1)} onDrop={event => drop(event, item, status[1])}><p draggable="true" onDragStart={event => drag(event,item,1)} onDragEnd={event => dragEnd(event)} > {item.Status === status[1] ? item.name : " "}</p></td>
                            <td className="tdLead" onDragOver={event => dragOver(event, 2)} onDrop={event => drop(event, item, status[2])}><p draggable="false" onDragEnd={event => dragEnd(event)} > {item.Status === status[2] ? item.name : " "}</p></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

