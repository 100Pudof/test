const initialState = {
    point: {},
    id: [],
};

const imagesReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                point: action.payload,

            }
            case 'ADD_FAV':
                 // решил не сам, но и не скопировал, доработал идею.  
                const id = state.id.includes(action.payload) 
                ?  state.id.filter(el => el !== action.payload).slice(0)
                : [...state.id, action.payload]

                return {
                    ...state,
                    id
                }
                
                default:
                    return state;
    }


}

export default imagesReduser;
