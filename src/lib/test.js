import React from 'react';
import ReactDOM from "react-dom/client";
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
let listeAttributsSelectTris = {
    name: "DepartmentTris",
    id: "DepartmentTris",
    required: true,
    onchange: "alert('changed!');",
};
let listeOptionsTris = {
    "SalesTris": "SalesTris",
    "MarketingTris": "MarketingTris",
    "EngineeringTris": "EngineeringTris",
    "HumanTris": "Human ResourcesTris",
    "LegalTris": "LegalTris",
};
let defaultValueTris = "HumanTris";

const root = ReactDOM.createRoot(document.getElementById("app"));
root.render(
    <>
        <SimpleDropdown
            listeAttributsSelect={listeAttributsSelect}
            listeOptions={listeOptions}
            defaultValue={defaultValue}
        />
        <SimpleDropdown
            listeAttributsSelect={listeAttributsSelectBis}
            listeOptions={listeOptionsBis}
            defaultValue={defaultValueBis}
        />
        <SimpleDropdown
            listeAttributsSelect={listeAttributsSelectTris}
            listeOptions={listeOptionsTris}
            defaultValue={defaultValueTris}
        />
    </>
);
