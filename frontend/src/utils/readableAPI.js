const api = "http://localhost:3001"

const headers = {
    //'Accept': 'application/json',
    'Authorization': 'sdvsgfsd'
}

export const getCategories = () =>
    fetch(`${api}/categories`, {headers}).then(res => res.json())

/*export getPostsForCategory = (category) =>
    fetch(`${api}/${category}/posts`, {headers})
        .then(res => res.json())
        .then(data => data.posts)

export getPosts = () =>
    fetch(`${api}/posts`, {headers})
        .then(res => res.json())
        .then(data => data.posts)

export newPost = (post) =>
    fetch(`${api}/books/${post.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post })
    }).then(res => res.json())

export getPost = (post) =>
    fetch(`${api}/posts/${post.id}`, {headers})
        .then(res => res.json())
        .then(data => data.posts)

export vote = (post, vote) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'POST',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ vote })
    }).then(res => res.json())

export editPost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'PUT',
        headers: {
            ...headers,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ post })
    }).then(res => res.json())

export deletePost = (post) =>
    fetch(`${api}/posts/${post.id}`, {
        method: 'DELETE',
        headers: {headers},
    }).then(res => res.json())*/






