import React from "react";
import {
    
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@material-ui/core";

import Buttons from '../Button'



export const MainTable = (props) => {
    const firstValue = props.tableHeaders[0];
    const bodyVal = props.tableHeaders;
    console.log(bodyVal)

    console.log(firstValue);

    const keyValue = Object.keys(firstValue);
    const Headers = [...keyValue, "Actions"];
    return (
        <div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            {Headers.map((element) => {
                                return <TableCell>{element}</TableCell>;
                            })}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {/* {bodyVal.filter(({ name }) => name.includes(props.tableSearch)).map((val) => { */}
                        
                            {bodyVal.map((val) => {
                           
                            const ab = Object.values(val);
                            return (
                                <TableRow>
                                    {ab.map((element) => {
                                        console.log(element);
                                        return <><TableCell>{element}</TableCell></>
                                          
                                    })}
                                  
                                           <>
                                           <Buttons text="Edit" userDetails = {ab[0]} details = {val} />
                                        <Buttons text="Delete" userDetails={ab[0]} details={val}/>
                                       </>
                                   
                                      
                                     
                                  
                                   
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};
