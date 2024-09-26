export type  AuthState ={
    isAuthenticated: boolean,
    accessToken: string,
    refreshToken: string
}

const initState : AuthState= {
    isAuthenticated: false,
    accessToken: "",
    refreshToken: ""
}
export type AuthActionType = {
    type: string,
    payload?: {accessToken: string, refreshToken: string}
}

export const authReducer = (currentState=initState, action: AuthActionType) => {

    //action: {type: "logged_in", payload: {accessToken: "", refreshToken: ""}}
    //action: {type: "logged_out"}

     //return the updated state
    if(action.type === "logged_in"){
        return {
            isAuthenticated: true,
            accessToken: action.payload?.accessToken,
            refreshToken: action.payload?.refreshToken
        }
    }
    if(action.type === 'Logged_out'){
        return initState;
    }

   
    return currentState;
}