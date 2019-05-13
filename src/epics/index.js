import { combineEpics } from 'redux-observable'
import authEpics from './authEpics'

export default combineEpics(
    authEpics
)