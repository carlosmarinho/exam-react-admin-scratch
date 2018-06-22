import { combineReducers } from 'redux';
import Users from './userReducer';
import Chats from './chatReducer';
import Products from './productReducer';

export default combineReducers({
    users: Users,
    chats: Chats,
    products: Products
})