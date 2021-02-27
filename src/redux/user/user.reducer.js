const INITIAL_STATE = {
    currentUser : null
}

// Default Value state = INITIAL_STATE

//It's Our State Reducer

const userReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'SET_CURRENT_USER':
            return {
                ...state,
                currentUser: action.payload,
            }

        default:
            return state;
    }
};


export default userReducer;