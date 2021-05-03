import { FunctionComponent } from 'react'

import Sidebar from '../Sidebar'
import { sidebarClientArray } from '../../services/Array'
import { lazy, Suspense } from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom';
import { Box, Button } from '@material-ui/core'
//  const {Customers} = lazy(() => import('../components/Customers'))
import Profile  from './Profile'
import MyOrders  from './MyOrders'



const BaseLayout = () => {

    const onClickHandler = () => {
        const a = localStorage.getItem("token")
        console.log(a)
        const removeToken = localStorage.removeItem("token");

        console.log(removeToken)
        window.location.reload()

    }
    console.log(window.location)
    const user = window.location.state
    console.log(user)

  

    return (
        <>

        Welcome to dashboard
            <Sidebar sidebarArray={sidebarClientArray} />
            <Profile user={user}/>
            <MyOrders user={user}/>

            <Switch>
                <Box pl={31}>
                    <Suspense fallback={<h2>Loading ...</h2>}>
                        {/* <Route path="/profile" component={() => <Profile user={user} />} /> */}
                        {/* <Route exact path="/client" component={Client} /> */}

                    </Suspense>
                </Box>


            </Switch>
            <Button onClick={() => onClickHandler()}>Logout</Button>

        </>

    )
}

export default BaseLayout;