import readableAPI from '../utils/readableAPI'

export const ADD_POSTS = 'ADD_POSTS'
export const ADD_POST = 'ADD_POST'
/*export const ADD_POST_VOTE = 'ADD_POST_VOTE'
export const EDIT_POST = 'EDIT_POST'
export const DELETE_POST = 'DELETE_POST'
export const ADD_COMMENT = 'ADD_COMMENT'
export const ADD_COMMENT_VOTE = 'ADD_COMMENT_VOTE'
export const EDIT_COMMENT = 'EDIT_COMMENT'
export const DELETE_COMMENT = 'DELETE_COMMENT'*/

export function addPosts (posts) {
    return {
        type: ADD_POSTS,
        posts,
    }
}

export const addPost = (data) => (dispatch) => {
    readableAPI.newPost(data)
        .then(dispatch(addPostAction(data)))
}

const addPostAction = (post) => {
    return {
        type: ADD_POST,
        post,
    }
}

/*export function addPostVote ({post}) {
    return {
        type: ADD_POST_VOTE,
        post,
    }
}

export function editPost ({post}) {
    return {
        type: EDIT_POST,
        post,
    }
}

export function deletePost ({post}) {
    return {
        type: DELETE_POST,
        post,
    }
}*/
