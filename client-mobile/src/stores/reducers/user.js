import { FetchingUser } from "../actions/actionType"

const initialState = {
    user: {}
}

function userReducer(state = initialState, action) {
    switch (action.type) {
        case FetchingUser:
            return {
                ...state, user: action.payload
            }
        default:
            return state
    }
}

export default userReducer