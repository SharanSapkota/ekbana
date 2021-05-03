import React from 'react'
import { MainTable } from '../../components/Table/Table'
import {Box} from '@material-ui/core'

function MyOrders({ user }) {

    const abc = user[0].orders
    console.log(abc)
    
    return (
        <div>
            <Box ml={40}>
                <MainTable tableHeaders={abc} />
            </Box>
        </div>
    )
}

export default MyOrders
