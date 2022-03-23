import React, { useState } from "react";
import "./leadCreateForm.css"

export function LeadCreateForm () {

    const[selectAll, setSelectAll] = useState(false)
    const[checkbox1, setCheckbox1] = useState(false)
    const[checkbox2, setCheckbox2] = useState(false)
    const[checkbox3, setCheckbox3] = useState(false)
    const[checkbox4, setCheckbox4] = useState(false)

    function allCheckboxChange (e){
        setSelectAll(e)
        setCheckbox1(!selectAll)
        setCheckbox2(!selectAll)
        setCheckbox3(!selectAll)
        setCheckbox4(!selectAll)
    }



    return(
        <div className="container">
            <form>
                <div>
                    <label>Nome *</label>
                    <br/>
                    <input type="text" required/>
                    <br/>
                    <label>Telefone *</label>
                    <br/>
                    <input type="tel" required/>
                    <br/>
                    <label>Email *</label>
                    <br/>
                    <input type="email" required/>
                    <br/>
                </div>
                <div>
                    <label>Oportunidades *</label>
                    <table>
                        <thead>
                            <tr>
                                <th><input type="checkbox" name="oportunidades" onChange={e => allCheckboxChange(e.target.checked)}/></th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td><input type="checkbox" id="RPA" name="oportunidades" value="RPA" onChange={e => setCheckbox1(!checkbox1)} checked={checkbox1}/></td>
                                <td><label htmlFor="RPA">RPA</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="Produto Digital" name="oportunidades" value="Produto Digital" onChange={e => setCheckbox2(!checkbox2)} checked={checkbox2}/></td>
                                <td><label htmlFor="Produto Digital">Produto Digital</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="Analytics" name="oportunidades" value="Analytics" onChange={e => setCheckbox3(!checkbox3)} checked={checkbox3}/></td>
                                <td><label htmlFor="Analytics">Analytics</label></td>
                            </tr>
                            <tr>
                                <td><input type="checkbox" id="BPM" name="oportunidades" value="BPM" onChange={e => setCheckbox4(!checkbox4)} checked={checkbox4}/></td>
                                <td><label htmlFor="BPM">BPM</label></td>
                            </tr>
                        </tbody>
                    </table>
                    <button type="submit">Salvar Lead</button>
                </div>
            </form>
        </div>
    )
}