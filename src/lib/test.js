import React from 'react';
import ReactDOM from 'react-dom';
import SimpleDropdown from './SimpleDropdown'; // Assurez-vous que le chemin est correct

//set des params de tests
let listeAttributsSelect = {
    name: "Department",
    id: "Department",
    required: true,
    onchange: "alert('changed!');",
};
let listeOptions = {
    "Sales": "Sales",
    "Marketing": "Marketing",
    "Engineering": "Engineering",
    "Human": "Human Resources",
    "Legal": "Legal",
};
let defaultValue = "Human";
let listeAttributsSelectBis = {
    name: "DepartmentBis",
    id: "DepartmentBis",
    required: true,
    onchange: "alert('changed!');",
};
let listeOptionsBis = {
    "SalesBis": "SalesBis",
    "MarketingBis": "MarketingBis",
    "EngineeringBis": "EngineeringBis",
    "HumanBis": "Human ResourcesBis",
    "LegalBis": "LegalBis",
};
let defaultValueBis = "HumanBis";

ReactDOM.render(
    <>
        <SimpleDropdown
            uniqueKey="SimpleDropdown"
            listeAttributsSelect={listeAttributsSelect}
            listeOptions={listeOptions}
            defaultValue={defaultValue}
        />
        <SimpleDropdown
            uniqueKey="SimpleDropdownBis"
            listeAttributsSelect={listeAttributsSelectBis}
            listeOptions={listeOptionsBis}
            defaultValue={defaultValueBis}
        />
    </>
    , document.getElementById('app'));
