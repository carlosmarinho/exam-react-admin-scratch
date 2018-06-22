import axios from 'axios';
import { FETCH_USERS, FETCH_CHATS, FETCH_PRODUCTS } from "./types";

export const fetchUsers = () => {
    console.log("no estado: ");
    const request = axios.get("http://localhost:3001/users");

    return {
        type: FETCH_USERS,
        payload: request
    }
}

export const fetchChats = () => {
    const request = axios.get("http://52.31.153.85/carga_teste_api_react.php");

    return {
        type: FETCH_CHATS,
        payload: request
    }
}

export const fetchProducts = () => {
    const request = axios.get("http://localhost:3001/products");

    return {
        type: FETCH_PRODUCTS,
        payload: request
    }
}