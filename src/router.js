import React from "react";
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import { LeadCreateView } from "./views/LeadCreateView";
import { LeadView } from "./views/LeadView";
import { LoginView } from "./views/LoginView";
import { RegisterView } from "./views/RegisterView";


export function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<LoginView/>}/>
                <Route path="/register" element={<RegisterView/>}/>
                <Route path="/lead-table" element={<LeadView/>}/>
                <Route path="/lead-create" element={<LeadCreateView/>}/>
            </Routes>
        </BrowserRouter>
    )
} 

