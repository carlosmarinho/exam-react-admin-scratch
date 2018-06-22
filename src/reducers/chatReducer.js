import { FETCH_CHATS } from '../actions/types';


export default (state = null, action) => {
    switch (action.type){
        case FETCH_CHATS:
            return action.payload.data;
        default: 
            return state;
    }
}