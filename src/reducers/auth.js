import {
	LOGIN_REQUEST,
	LOGIN_FAILED,
	LOGIN_SUCCESS
} from '../constants/auth'

const initialState = {
	isLoggedIn: false,
	loading: false,
	error: false
};

const authReducer = (state = initialState, action) => {
		switch(action.type) {
				case LOGIN_REQUEST:
					return {
						...state,
						loading: true,
						error: false
					}
				case LOGIN_FAILED:
					return {
						...state,
						loading: false,
						error: true
					}
				case LOGIN_SUCCESS:
					return {
						...state,
						loading: false,
						error: false
					}
				default:
					return state
		}
}

export default authReducer;
