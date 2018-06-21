//import axios from 'axios';

export const fetchUsers = () => {
    console.log("no estado: ");
    return {
        type: "FETCH_USERS",
        payload: {name: 'carlos Luiz', id: 1}
    }
}