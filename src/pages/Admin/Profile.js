import React from 'react'
import {Button, Box} from '@material-ui/core'

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
            <Box color="primary" fontSize="20" paddin= "12">
                My Profile
            </Box>
            <div>
                name: {user[0].name}
            </div>
            <div>
                Phone: {user[0].phone_number}
            </div>
            <div>
                email: {user[0].email}
            </div>
      

            
            <Button color = "primary" onClick={() => onClickHandler()}>My orders</Button>
           
        </div>
    )
}

export default Profile
