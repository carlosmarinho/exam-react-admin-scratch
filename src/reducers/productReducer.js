import { FETCH_PRODUCTS } from "../actions/types";

export default (state = null, action) => {
    switch( action.type ) {
        case FETCH_PRODUCTS:
            return action.payload.data
        default: 
            return state;
    }
}