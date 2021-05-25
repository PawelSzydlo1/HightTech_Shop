const token = !(localStorage.getItem('token')===null);


const initialState = token ? {
    login: true,
} : {
    login: false,
    register_error: false
};

console.log(token);
const auth = (state = initialState, action) => {
    switch (action.type) {
        case "SIGNIN":
            console.log("jestem w sign");
            if(action.payload!==undefined){
                localStorage.setItem("id", JSON.stringify(action.payload.first));
                localStorage.setItem("token", action.payload.second);
            }

            return {
                ...state, auth: action.payload, login: true, login_error: false
            }

        case "SIGNIN_ERROR":
            return {
                ...state, login_error: true,
            }
        case 'SIGNOUT': {

            localStorage.removeItem("id");
            localStorage.removeItem("token");
            state.login = false;
            return state;
        }
        default:
            return state;
    }
}
export default auth;