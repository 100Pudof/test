const initialState = {
    isAuth: false,
}

const isAuth = (state = initialState, action) => {
    switch (action.type) {
        case 'IS_AUTH':
            return {
                ...state,
                isAuth: true,

            }
            case 'IS_AUTH_FALSE':
                return {
                    ...state,
                    isAuth: false,

                }

                default:
                    return state
    }
}
export default isAuth;