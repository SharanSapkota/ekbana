import React, { useState, useEffect } from 'react'
import { TextField, Button, Box } from '@material-ui/core';

import VisibilityOffIcon from '@material-ui/icons/VisibilityOff';
import VisibilityIcon from '@material-ui/icons/Visibility';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { IconButton } from '@material-ui/core'
import { InputAdornment } from '@material-ui/core'

import axios from 'axios'
import {useHistory, Link} from 'react-router-dom'

function Login() {
    console.log("abc")
    const history = useHistory();

    const [values, setValues] = useState({
        name: "",
        password: ""

    })

    const [showPassword, setShowPassword] = useState(false)

    useEffect(() => {
       const checkToken = localStorage.getItem("token")
        if (checkToken) {
           history.replace('/dashboard')
       }
    })

    const onClickHandler = async (e) => {

        if (values.name === "sharan123" && values.password === "sharan123") {
            localStorage.setItem("token", "abc")
            history.replace('/')
        } else if (!values.name || !values.password) {
            
            alert("fields cannot be empty")
        }
        else {
            const checkUser = await axios.post(`/api/login/users/${values.name}`, values)
            const checkEmpty = checkUser.data
            // console.log(checkEmpty)
            if (checkEmpty.length<1) {
                console.log(checkEmpty)
               alert("no user exists")
            } else {
                console.log(checkEmpty.length)
                localStorage.setItem("token", "abc")
                // console.log(checkEmpty)
                window.location.state = checkEmpty

                console.log(window.location.state)
                history.push({
                    pathname: '/dashboard',
                state: checkEmpty
                })



            }
           
        }

      
    }


    const onChangeHandler = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value })
    }
  

    return (
        <Box mt={10}>

            
            <label>
                Login
            </label>
            < LockOutlinedIcon/>
            <div>
            <TextField

                type="text"
                    id="standard-basic"
                label="name"
                name="name"
                value={values.name}
                variant="outlined"
                onChange={(e) => onChangeHandler(e)}
                /> <br />
            </div>

            <div>
            <TextField

                type={showPassword ? "text" : "password"}
                label="password"
                name="password"
                value={values.password}
                variant="outlined"
                    onChange={(e) => onChangeHandler(e)}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton onClick={() => setShowPassword(!showPassword)} >
                                    {showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
                                    }
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
            />

            </div>
           

            <Button color="primary" onClick={(e) => onClickHandler(e)}>Sign in</Button>
        </Box>
    )
}

export default Login
