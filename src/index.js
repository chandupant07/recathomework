import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import { Hello } from './components/app';
import { DataBindingComponent } from './components/DataBinding';
import { DropDown } from './components/card';
import { Databinddrop } from './components/integer';
import { Datashow } from './components/dropdownlist';
import { Tabledata } from './components/dataTable';
import DataBindinAPI from './components/databindINAPI';
import EventBinding from './components/eventBinding';
import AddProgram from './components/addProgram';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <Hello /> */}
    {/* <DataBindingComponent />
    <DropDown />
    <Databinddrop />
    <Datashow />
    <Tabledata />
    <DataBindinAPI /> */}
    {/* <EventBinding /> */}

    <AddProgram />

  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
