const api = "http://localhost:3001"

const headers = {
    'Authorization': 'sdvsgfsd'
}

export const getCategories = () =>
    fetch(`${api}/categories`, {headers}).then(resolve => resolve.json())

export const getPostsForCategory = (category) =>
    fetch(`${api}/${category}/posts`, {headers}).then(resolve => resolve.json())

export const getPosts = () =>
    fetch(`${api}/posts`, {headers}).then(resolve => resolve.json())

export const newPost = (post) =>
    fetch(`${api}/posts/`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(post)
    }).then(resolve => resolve)

export const getPost = (id) =>
    fetch(`${api}/posts/${id}`, {headers}).then(res => res.json())

export const votePost = (id, vote) =>
    fetch(`${api}/posts/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option: vote})
    }).then(resolve => resolve)

export const editPost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            title: post.title,
            body: post.body,
        })
    }).then(resolve => resolve)

export const deletePost = (id) =>
    fetch(`${api}/posts/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(resolve => resolve)

export const getComments = (id) =>
    fetch(`${api}/posts/${id}/comments`, {headers}).then(res => res.json())

export const newComment = (comment) =>
    fetch(`${api}/comments/`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(comment)
    }).then(resolve => resolve)

export const getComment = (id) =>
    fetch(`${api}/comments/${id}`, {headers}).then(resolve => resolve.json())

export const voteComment = (id, vote) =>
    fetch(`${api}/comments/${id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({option: vote})
    }).then(resolve => resolve)

export const editComment = (comment) =>
    fetch(`${api}/comments/${comment.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            timestamp: Date.now(),
            body: comment.body,
        })
    }).then(resolve => resolve)

export const deleteComment = (id) =>
    fetch(`${api}/comments/${id}`, {
        method: 'DELETE',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
    }).then(resolve => resolve)




