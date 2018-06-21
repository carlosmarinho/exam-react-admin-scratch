import axios from 'axios';

export const fetchUsers = () => {
    console.log("no estado: ");
    const request = axios.get("http://localhost:3001/users")

    return {
        type: "FETCH_USERS",
        payload: request
    }
}