import React, { FunctionComponent, useState } from 'react'
import axios from 'axios'

import {
    TextField,
} from "@material-ui/core";


export const Search = (props) => {
    // console.log(1)
    const [search, setSearch] = useState("")
    const [data, setData] = useState([])
    const [value, setValue] = useState({
        search: ""
    })

    // const onChangeHandler = async (e) => {
    //     // props.abc(e.target.value);
    //     setSearch(e.target.value);
    //     setValue({ ...value, [e.target.name]: e.target.value });
    // const query = await axios.get(`${props.link}${search}`);
    // console.log(query)
    //     const queryData = query.data
    //     setData(queryData)
    // }
    // console.log(value)

    // const onClickHandler = (e) => {
    //     console.log(e.target.innerHTML)
    //     setValue({ search: e.target.innerHTML })
    //     setData([])
    

        return (
            <>
                <TextField
                    type="search"
                    variant="outlined"
                    label="Service Name"
                    name="search"
                     value={value.search}
                    // fullWidth
                    //  onChange={(e) => onChangeHandler(e)}


                />

                {/* {data.length > 0 && value.search ?

                    data.map((val) => {

                        console.log(typeof val.apiData)
                        return <div onClick={(e) => onClickHandler(e)}>{val[props.data]}</div>
                    }) : ""

                } */}

            </>
        )
    }
//  }
