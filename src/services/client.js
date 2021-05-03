import axios from 'axios'

export const getUsers = async () => {
    const getUsers = await axios.get('/api/users');
    console.log(getUsers.data.users)
    return getUsers.data.users
}

export const Login = async (data) => {
    const postUsers = await axios.post('api/login/users', data )
}

export const getOrders = async () => {
    const getOrders = await axios.get('/api/orders');
    console.log(getOrders)
}