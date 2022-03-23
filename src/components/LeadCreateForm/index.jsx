import React, { useState } from "react";
import { Link } from "react-router-dom";
import LeadService from "../../services/lead";
import "./leadCreateForm.css";

export function LeadCreateForm () {

    const[name, setName] = useState("");
    const[tel, setTel] = useState("");
    const[email, setEmail] = useState("");
    const[selectAll, setSelectAll] = useState(false);
    const[checkbox1, setCheckbox1] = useState(false);
    const[checkbox2, setCheckbox2] = useState(false);
    const[checkbox3, setCheckbox3] = useState(false);
    const[checkbox4, setCheckbox4] = useState(false);
    const[error, setError] = useState("")
    //const oportunidades = ["RPA","Produto Digital","Analytics","BPM"]

    const errorCheckbox = "Necessário selecionar ao menos uma oportunidade"

    function allCheckboxChange (e){
        setSelectAll(e);
        setCheckbox1(!selectAll);
        setCheckbox2(!selectAll);
        setCheckbox3(!selectAll);
        setCheckbox4(!selectAll);
    }

    async function HandleSubmit(event) {
        console.log();
        event.preventDefault();
        try {
            if(checkbox1 || checkbox2 || checkbox3 || checkbox4){
                const lead = {name,tel,email,"RPA":checkbox1,"Produto Digital":checkbox2,"Analytics":checkbox3,"BPM":checkbox4,"Status": "Cliente em Potencial"}
                LeadService.create(lead)
            }else {
                throw errorCheckbox
            }
        } catch (error) {
            setError(error)
        }
    }


    return(
        <div className="container">
            <form onSubmit={HandleSubmit} className="formLeadCreate">
                <div>
                    <label>Nome *</label>
                    <br/>
                    <input type="text" required value={name} onChange={e => setName(e.target.value)}/>
                    <br/>
                    <label>Telefone *</label>
                    <br/>
                    <input type="tel" required value={tel} onChange={e => setTel(e.target.value)}/>
                    <br/>
                    <label>Email *</label>
                    <br/>
                    <input type="email" required value={email} onChange={e => setEmail(e.target.value)}/>
                    <br/>
                </div>
                <div>
                    <label>Oportunidades *</label>
                    <table className="checkboxTable">
                        <thead>
                            <tr>
                                <th><input className="inputLeadCreate" type="checkbox" name="oportunidades" onChange={e => allCheckboxChange(e.target.checked)}/></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input className="inputLeadCreate" type="checkbox" id="RPA" name="oportunidades" value="RPA" onChange={e => setCheckbox1(!checkbox1)} checked={checkbox1}/></td>
                                <td><label htmlFor="RPA" className="labelLeadCreate">RPA</label></td>
                            </tr>
                            <tr>
                                <td><input className="inputLeadCreate" type="checkbox" id="Produto Digital" name="oportunidades" value="Produto Digital" onChange={e => setCheckbox2(!checkbox2)} checked={checkbox2}/></td>
                                <td><label htmlFor="Produto Digital" className="labelLeadCreate">Produto Digital</label></td>
                            </tr>
                            <tr>
                                <td><input className="inputLeadCreate" type="checkbox" id="Analytics" name="oportunidades" value="Analytics" onChange={e => setCheckbox3(!checkbox3)} checked={checkbox3}/></td>
                                <td><label htmlFor="Analytics" className="labelLeadCreate">Analytics</label></td>
                            </tr>
                            <tr>
                                <td><input className="inputLeadCreate" type="checkbox" id="BPM" name="oportunidades" value="BPM" onChange={e => setCheckbox4(!checkbox4)} checked={checkbox4}/></td>
                                <td><label htmlFor="BPM" className="labelLeadCreate">BPM</label></td>
                            </tr>
                        </tbody>
                    </table>
                    <Link to="/lead-table"><button id="btnCancel">Cancelar</button></Link>
                    <button type="submit" className="btnSaveLead">Salvar Lead</button>
                    <p className="error leadCreate">{error ? error : ""}</p>
                </div>
            </form>
        </div>
    )
}