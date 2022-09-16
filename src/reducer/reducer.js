const initial_state = {
    data : null
}

const userReducer = (state= initial_state, action) => {
    switch(action.type) {
        case 'LOGIN' :
            return {
                ...state,
                data : action.payload.data
            }
        default :
        return state
    }
}

export default userReducer