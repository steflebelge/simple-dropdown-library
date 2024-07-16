import React, {useEffect, useState} from 'react';
import "./SimpleDropdown.scss";
import { v4 } from 'uuid';

function SimpleDropdown({listeAttributsSelect, listeOptions, defaultValue}) {
    const [error, seterror] = useState(null);
    const unikIdentifier = v4();

    useEffect(() => {
        //verification params
        if (!listeAttributsSelect || !listeOptions || !defaultValue)
            return seterror('Missing parameter');
        if (typeof listeAttributsSelect !== "object"
            || typeof listeOptions !== "object"
            || typeof defaultValue !== "string")
            return seterror('Bad parameter type');
        if (!listeAttributsSelect['name']
            || !listeOptions[defaultValue])
            return seterror('Invalid parameter');

        //tri des options par ordre croissant
        const entries = Object.entries(listeOptions);
        entries.sort((a, b) => a[0].localeCompare(b[0]));
        listeOptions = Object.fromEntries(entries);

        //recuperation du bon element de selection
        let select = document.getElementById(unikIdentifier);
        if(!select)
            return;

        //set des attributs du select
        Object.keys(listeAttributsSelect).forEach(function (keyTmp) {
            select.setAttribute(keyTmp, listeAttributsSelect[keyTmp]);
        });

        //set des options du select
        Object.keys(listeOptions).forEach(function (keyTmp) {
            if (!listeOptions[keyTmp])
                return seterror(`The ${keyTmp} attribut of parameter 'listeOptions' seems to be wrong.`);

            //Ajout si pas deja présent
            if(!select.querySelector(`option[value="${keyTmp}"]`)) {
                let newOption = `<option value="${keyTmp}">${listeOptions[keyTmp]}</option>`;
                if (defaultValue === keyTmp)
                    newOption = `<option selected="selected" value="${keyTmp}">${listeOptions[keyTmp]}</option>`;
                select.insertAdjacentHTML('beforeend', newOption);
            }
        });
    }, []);

    return (
        error ? (
            <p>{error}</p>
        ) : (
            <select id={unikIdentifier}/>
        )
    );
}

export default SimpleDropdown;
