const initialState = {
    point: [],
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
                const old = [...state.id];
                const id = state.id.includes(action.payload) 
                ?  state.id.slice(0,  old.length -1 )
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

// const id = state.id.includes(action.payload) 
//                 ?  state.id.filter(id => id == action.payload)
//                 : [...state.id, action.payload]


// const initialState = {
//     id: [],
// };

// const imagesReduser = (state = initialState, action) => {
//     switch (action.type) {
//         case 'SET_ITEMS':
//             return {
//                 ...state,
//                 id: [action.payload] 
//                 ? delete [...state.id[action.payload]] 
//                 : [action.payload],

//             }