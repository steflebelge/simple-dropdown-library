import React, {useEffect, useState} from 'react';
import "./SimpleDropdown.scss";

function SimpleDropdown({uniqueKey, listeAttributsSelect, listeOptions, defaultValue}) {
    const [error, seterror] = useState(null);

    useEffect(() => {
        //verification params
        if (!listeAttributsSelect || !listeOptions || !defaultValue)
            return seterror('Parametre manquant');
        if (typeof listeAttributsSelect !== "object"
            || typeof listeOptions !== "object"
            || typeof defaultValue !== "string")
            return seterror('Mauvais type de parametre');
        if (!listeAttributsSelect['name']
            || !listeOptions[defaultValue])
            return seterror('Parametre invalide');

        //tri des options par ordre croissant
        const entries = Object.entries(listeOptions);
        entries.sort((a, b) => a[0].localeCompare(b[0]));
        listeOptions = Object.fromEntries(entries);

        //recuperation du bon element de selection
        let select = document.querySelector('select[uniqueKey="' + uniqueKey + '"]');

        //set des attributs du select
        Object.keys(listeAttributsSelect).forEach(function (keyTmp) {
            // if (!listeAttributsSelect[keyTmp])
            //     return seterror(`L'attribut ${keyTmp} du paramètre 'listeAttributsSelect' semble poser probleme.`);

            select.setAttribute(keyTmp, listeAttributsSelect[keyTmp]);
        });
        //set des options du select
        Object.keys(listeOptions).forEach(function (keyTmp) {
            if (!listeOptions[keyTmp])
                return seterror(`L'attribut ${keyTmp} du paramètre 'listeOptions' semble poser probleme.`);

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
            <select uniqueKey={uniqueKey}></select>
        )
    );
}

export default SimpleDropdown;
