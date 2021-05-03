import React, { FunctionComponent, useState, useEffect } from "react";
import { MainTable } from "./Table/Table";
import { getUsers } from "../services/client";
export const Customers = () => {
    const [clients, setClients] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const client = await getUsers();
            const a = client.filter((obj) => {
               
             delete obj.orders
             delete obj.image
            })
            console.log(client)
            setClients(client)
        }
        fetchData()
    }, [])

    return (
        <div>

            {/* <Search link='/api/users/search?search='/> */}
            {/* <Search link='/api/users/search?search=' data="name" abc={(searchText) => console.log(searchText)} />  */}
            {clients.length == 0 ? "" : <MainTable tableHeaders={clients} />
            }



        </div>
    )
}
