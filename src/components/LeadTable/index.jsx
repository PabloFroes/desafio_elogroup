import React, {useEffect, useState } from "react";
import Modal from "react-modal/lib/components/Modal";
import { Link } from "react-router-dom";
import LeadService from "../../services/lead";
import "./leadTable.css"

Modal.setAppElement('#root')

export function LeadTable () {

    const [lead, setLead] = useState({})
    const [leads, setLeads] = useState([])
    const [index,setIndex] = useState(0)
    const [indexTarget, setIndexTarget] = useState(0)
    const [row,setRow] = useState(0)
    const [rowTarget, setRowTarget] = useState(0)
    const [isLeadInfoModalOpen, setIsLeadInfoModalOpen] = useState(false)
    const [isLeadDeleteModalOpen, setIsLeadDeleteModalOpen] = useState(false)
    const [leadToDeleteIndex, setLeadToDeleteIndex] = useState(0)

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

    function remove () {
        try { 
            LeadService.delete(leadToDeleteIndex)
                window.location.reload(false);
        } catch (error) {
            console.log(error)
        }
    }

    function sameRow () {
        if(row === rowTarget){
            return true
        }else {
            return false
        }
    }
    
    function allowDrop () {
        if(index < indexTarget){
            if(sameRow()){
                if(indexTarget-index === 1){
                    return true
                }
            }
        }
    }
    
    function drag (event,item,index) {
        setIndex(index)
        event.dataTransfer.setData("text", item.name);
        setRow(event.target.parentElement.parentElement.id);
    }
    
    
    function dragEnd (event){
        if(allowDrop()){
            event.target.innerHTML = ""       
        }
    }
    
    async function drop (event,item,status) {
            if(allowDrop()){
                event.target.children[0].innerHTML= item.name
                try {
                    await LeadService.update(row,status)
                    await fetchLeads()
                } catch (error) {
                    
                }
            }
    }
    function dragOver (event, indexTarget){
        setRowTarget(event.target.parentElement.id);
        event.preventDefault();
        setIndexTarget(indexTarget);
    }


    function handleOpenLeadInfoModal (lead) {
        setIsLeadInfoModalOpen(true)
        setLead(lead)
    }

    function handleCloseLeadInfoModal () {
        setIsLeadInfoModalOpen(false)
    }

    function handleOpenLeadDeleteModal (lead,leadToDeleteIndex) {
        setIsLeadDeleteModalOpen(true)
        setLead(lead)
        setLeadToDeleteIndex(leadToDeleteIndex)
    }

    function handleCloseLeadDeleteModal () {
        setIsLeadDeleteModalOpen(false)
    }



    return(
        <div className="container">
            <Link to="/lead-create">
                <button className="btnCreateLead">Novo Lead <span>+</span></button>   
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
                            <td className="tableBtn"><Link to="/lead-table" onClick={event => handleOpenLeadDeleteModal(item,key)} className="remove" title="Remover Lead">✖</Link><Link to='#' onClick={e => handleOpenLeadInfoModal(item)} className="details" title="Mais informações">🛈</Link></td>                         
                        </tr>
                    )}
                </tbody>
            </table>
            <Modal className="modal" isOpen={isLeadInfoModalOpen} onRequestClose={handleCloseLeadInfoModal}>
                <div className="containerModal">
                    <div className="content">
                        <h1>Lead</h1>
                        <p>Nome: {lead.name}</p>
                        <p>Telefone: {lead.tel}</p>
                        <p>Email: {lead.email}</p>
                        <p>Status: {lead.Status}</p>
                        <p>Oportunidades:</p>
                            <ul>{lead.Analytics ? <li>Analytics</li> : ""}{lead.BPM ? <li>BPM</li> : ""}{lead["Produto Digital"] ? <li>Produto Digital</li> : ""}{lead.RPA ? <li>RPA</li> : ""}</ul>
                    </div>
                    <button className="closeBtn" onClick={handleCloseLeadInfoModal}>✖</button>

                </div>
            </Modal>
            <Modal className="modal leadDelete" isOpen={isLeadDeleteModalOpen} onRequestClose={handleCloseLeadDeleteModal}>
                <div className="containerModal">
                    <div className="content">
                        <h1>Lead</h1>
                        <p>Nome: {lead.name}</p>
                        <p>Telefone: {lead.tel}</p>
                        <p>Email: {lead.email}</p>
                        <p>Status: {lead.Status}</p>
                        <p>Oportunidades:</p>
                            <ul>{lead.Analytics ? <li>Analytics</li> : ""}{lead.BPM ? <li>BPM</li> : ""}{lead["Produto Digital"] ? <li>Produto Digital</li> : ""}{lead.RPA ? <li>RPA</li> : ""}</ul>
                    </div>
                    <button className="closeBtn" onClick={handleCloseLeadDeleteModal}>✖</button>
                </div>
                <div className="btnContainer">
                    <button className="delete" onClick={remove}>Remover</button>
                    <button className="cancel" onClick={handleCloseLeadDeleteModal}>Cancelar</button>
                </div>
            </Modal>
        </div>
    )
}

