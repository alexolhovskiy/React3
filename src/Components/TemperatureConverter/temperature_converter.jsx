import { Button, TextField } from "@mui/material";
import { useState } from 'react'
// [°C] = ([°F] − 32) × 5⁄9
export const TemperatureConverter=()=>{
    const [f_value,setFValue]=useState(0);
    const [c_value,setCValue]=useState(0);
    const [flag,setFlag]=useState(0);

    const getFValue=(e)=>{
        setFValue(e.target.value);
        setFlag(1);
    }

    const getCValue=(e)=>{
        setCValue(e.target.value);
        setFlag(2);
    }

    const convert=()=>{
        console.log(flag);
        switch(flag){
            case 1:
                setCValue((f_value-32)*(5/9));
                break;
            case 2:
                setFValue(c_value/(5/9)+32);
                break;
            default:
        }               
    }

    return (
        <div className="container">
            <div className="converter">
                <TextField label="Введите градусы Фаренгейта" onChange={getFValue} value={f_value}></TextField>
                <Button variant='contained' color='primary' onClick={convert}>Конвертация</Button>
                <TextField label="Введите градусы Цельсия" onChange={getCValue} value={c_value}></TextField>
            </div>
        </div>
    );
}