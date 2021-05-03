import React, { useState, useEffect }from 'react'
import {
   Button

} from "@material-ui/core";


import axios from 'axios';
import PopUp from './PopUp'



function Buttons({userDetails, text, details}) {

    const [isTrue, setTrue] = useState(false)

// console.log(props.userDetail)
    const onClickHandler = (e) => {
        if (text === "Edit") {

            setTrue(!isTrue)

           axios.path(`/api/users/${userDetails}`)
        }
        else {
            console.log("delete")
        }
    }

    return (
        <div>
            {isTrue ? <PopUp details={details} />   : null}
            <Button
                variant="contained"
                color="primary"
                type="submit"
                onClick={(e) => onClickHandler(e)}
            >
                {isTrue? "" : text}
               
                  </Button>
         
        </div>
    )
}

export default Buttons
