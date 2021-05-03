import React, {useState, useEffect} from 'react'
import { TextField, Button } from '@material-ui/core';
import axios from 'axios'

function PopUp({details}) {

    const [values, setValues] = useState({
        name: "",
        password: "",
        email: "",
        phone_number: ""

    })

    const onClickHandler = async (e) => {
       await axios.patch(`api/users/${details.id}`, values)
    }


    const onChangeHandler = (e) => {
        
        setValues({...values, [e.target.name]: e.target.value})
    }
    console.log(values)

    return (
        <div>
                        
            <TextField
            
               type= "text"
                label="name"
                name= "name"
                value = {details.name}
                variant="outlined"
                onChange = { (e) => onChangeHandler(e)}
            />
            <TextField
            
               type= "text"
                label="password"
                name = "password"
                value = {details.password}
                variant="outlined"
                onChange={(e) => onChangeHandler(e)}
            />
            <TextField
            
               type= "email"
                label="email"
                name = "password"
                value = {details.email}
                variant="outlined"
                onChange={(e) => onChangeHandler(e)}
            />
            <TextField
            
               type= "number"
                label="number"
                name="phone_number"
            value = {details.phone_number}
                variant="outlined"
                onChange={(e) => onChangeHandler(e)}
            />

            <Button onClick = {(e) => onClickHandler(e)}>Done</Button>
        </div>
    )
}

export default PopUp
