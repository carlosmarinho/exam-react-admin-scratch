export default function(state = null, action) {
    console.log('action: ', action);
    console.log('state: ', state);
    switch (action.type) {
        case "FETCH_USERS":
            return action.payload;
        default: return state;
    }

}