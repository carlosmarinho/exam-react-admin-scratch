export default function(state = null, action) {
    console.log('action: ', action.type);
    console.log('state: ', state);
    switch (action.type) {
        case "FETCH_USERS":
            return action.payload.data;
        default: return state;
    }

}