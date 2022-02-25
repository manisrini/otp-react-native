import { createStore } from "redux";

const otpReducer = (state = { phoneNum: '',code : ''}, action) => {
    if (action.type == "setphNum")
    {
        return {
            phoneNum: action.phnum,
            code : state.code
        }
    }

    if (action.type === "code")
    {
        return {
            phoneNum: state.phoneNum,
            code : action.vcode
        }
    }

    if (action.type === "over")
    {
        return {
            phoneNum: '',
            code : ''
        }
    }
    return state;

}


const store = createStore(otpReducer);
export default store;
