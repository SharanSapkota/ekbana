import { FunctionComponent } from 'react'

import Sidebar from '../Sidebar'
import {sidebarArray} from '../../services/Array'
import { lazy, Suspense } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Box, Button } from '@material-ui/core'
//  const {Customers} = lazy(() => import('../components/Customers'))
 import {Customers} from '../../components/Customers'



const BaseLayout = () => {

    const onClickHandler = () => {
        const a = localStorage.getItem("token")
        console.log(a)
        const removeToken = localStorage.removeItem("token");
       
        console.log(removeToken)
        window.location.reload()
        
    }
    console.log(1)
    // const match = useRouteMatch();

    return (
        <>
            <Sidebar sidebarArray={ sidebarArray}/>
            <Button onClick={() => onClickHandler()}>Logout</Button>

            <Switch>
                <Box pl={31}>
                    <Suspense fallback={<h2>Loading ...</h2>}>

                     
                        <Route exact path="/customers" component={Customers} />
                        {/* <Route exact path="/client" component={Client} /> */}

                    </Suspense>
                </Box>
               

            </Switch>
        </>

    )
}

export default BaseLayout;