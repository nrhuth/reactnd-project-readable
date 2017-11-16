//import { combineReducers } from 'redux'
import {
    ADD_POSTS,
    ADD_POST,
    /*ADD_POST_VOTE,
    EDIT_POST,
    DELETE_POST,
    ADD_COMMENT,
    ADD_COMMENT_VOTE,
    EDIT_COMMENT,
    DELETE_COMMENT,*/
} from '../actions'

function posts (state = [], action) {

    switch (action.type) {
        case ADD_POSTS:
            return action.posts;
        case ADD_POST:
            return [
                ...state,
                action.post
            ]
        /*case ADD_POST_VOTE:
            return state
        case EDIT_POST:
            return state
        case DELETE_POST:
            return state*/
        default:
            return state
    }
}

export default posts
