
import {
    Drawer as MUIDrawer,
    ListItem,
    List,
    ListItemText,
    Box
} from '@material-ui/core'

// import array from './Array'
import { useHistory } from 'react-router-dom';
// import { FunctionComponent } from 'react'

const Sidebar = ({sidebarArray}) => {

    const history = useHistory()
    const onClickHandler = (text) => {
        const textLowerCase = text.toLowerCase();
        history.replace(`${textLowerCase}`);
    }


    return (
        <>
            <MUIDrawer variant="permanent">
                <Box pr={20}>
                    <List>
                        {sidebarArray.map((text, index) => (
                            
                            <ListItem button
                             onClick={() => { return onClickHandler(text) }}
                                key={text} > 
                                <ListItemText primary={text} />
                            </ListItem>
                         
                     ))}
                    </List>
                </Box>
            </MUIDrawer>

        </>
    )
}

export default Sidebar