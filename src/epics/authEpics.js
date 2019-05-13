import 'rxjs'
// import { push } from 'react-router-redux'
import { ofType } from 'redux-observable'
import {
    IS_USER_LOGIN
} from '../constants/auth'

const authEpics = action$ =>
    action$.pipe(
        ofType(IS_USER_LOGIN)
    )

    export default authEpics