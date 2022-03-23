import React from 'react';
import ReactDOM from 'react-dom';
import "./styles/index.css"
import {App} from './App';
import {Login} from './components/User/Login'
import {Register} from './components/User/Register'
import { Header } from './components/Header/Header';
import { LeadTable } from './components/LeadTable';

ReactDOM.render(
  <React.StrictMode>
    <LeadTable />
  </React.StrictMode>,
  document.getElementById('root')
);