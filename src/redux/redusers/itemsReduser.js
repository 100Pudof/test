const initialState = {
    point: [],
    count: null,
};

const imagesReduser = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ITEMS':
            return {
                ...state,
                point: action.payload,

            }
        case 'ADD_FAV': 
        return {
            ...state,
            count: action.payload
        } 
            

                default:
                    return state;
    }


}

export default imagesReduser;