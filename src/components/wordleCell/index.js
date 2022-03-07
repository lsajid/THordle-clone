import React, { useState } from "react";
import "./styles.css";

import TextField from "@mui/material/TextField"

function WordleCell(props) {
    const [ value, setValue ] = useState("");

    const setCleanValue = (value) => {
        //sanitize
        if((!value.match(/[a-z]/i)) && value.length !== 0){
            return;
        }

        value = value.toUpperCase();
        let character_added = true;

        if (value.length === 1){
            setValue(value);
        } else if (value.length === 2){
            setValue(value.charAt(1));
        } else{
            setValue('');
            character_added = false;
        }

        if (character_added){
            
        }
    }
}