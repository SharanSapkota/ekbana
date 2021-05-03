import React from 'react'
import {Button} from '@material-ui/core'

function Profile({ user }) {

    const onClickHandler = () => {
        
    }
    
    console.log("user")
    console.log(user)
    // user.filter((val) => {
    //     console.log(val)
    //     })

    return (
        <div>
            {/* {user.map((el) => {
                return el
            })} */}

            <Button color = "primary" onClick={() => onClickHandler()}>My orders</Button>
           
        </div>
    )
}

export default Profile
