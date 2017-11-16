import React, { Component } from 'react';
import logo from '../logo.svg';
import '../App.css';
import * as ReadableAPI from '../utils/readableAPI.js'
import { connect } from 'react-redux'
import { addPost, addPosts } from '../actions'
//import CalendarIcon from 'react-icons/lib/fa/calendar-plus-o'
//import Modal from 'react-modal'
//import ArrowRightIcon from 'react-icons/lib/fa/arrow-circle-right'
//import Loading from 'react-loading'

class App extends Component {
    state = {
        post: {},
    }
    componentDidMount() {
        const uuidv1 = require('uuid/v1')
        /*ReadableAPI.getCategories().then((categories)=> {
            console.log(categories)
        })
        ReadableAPI.getPostsForCategory('react').then((posts)=> {
            console.log(posts)
        })*/
        ReadableAPI.getPosts().then((posts) => {
            this.props.requestPosts(posts)
        })
        /*const post = {
            id: uuidv1(),
            timestamp: Date.now(),
            title: 'Test',
            body: 'Test test!',
            author: 'Test auhtor',
            category: 'redux',
        }
        ReadableAPI.newPost(post).then((result)=> {
            console.log(result)
        })
        ReadableAPI.getPost("2d48fb80-c96f-11e7-bc51-cd3fd8a8d0fd").then((posts)=> {
            console.log(posts)
        })
        ReadableAPI.votePost("2d48fb80-c96f-11e7-bc51-cd3fd8a8d0fd", "upVote").then((posts)=> {
            console.log(posts)
        })
        const postEdit = {
            id: "2d48fb80-c96f-11e7-bc51-cd3fd8a8d0fd",
            timestamp: Date.now(),
            title: 'Updated',
            body: 'Updated Updated',
            author: 'Test auhtor',
            category: 'redux',
        }
        ReadableAPI.editPost(postEdit).then((posts)=> {
            console.log(posts)
        })
        ReadableAPI.deletePost('c0c1a5d0-c981-11e7-9cd2-6d0a51a897bd').then((posts)=> {
            console.log(posts)
        })
        ReadableAPI.getComments("8xf0y6ziyjabvozdd253nd").then((categories)=> {
            console.log(categories)
        })
        const comment = {
            id: uuidv1(),
            timestamp: Date.now(),
            body: 'Comment comment!',
            author: 'Comment author',
            parentId: '2d48fb80-c96f-11e7-bc51-cd3fd8a8d0fd',
        }
        ReadableAPI.newComment(comment).then((result)=> {
            console.log(result)
        })
        ReadableAPI.getComments("2d48fb80-c96f-11e7-bc51-cd3fd8a8d0fd").then((categories)=> {
            console.log(categories)
        })
        ReadableAPI.getComment("2a1c02e0-c98d-11e7-ac28-53c85d19dc6b").then((categories)=> {
            console.log(categories)
        })
        ReadableAPI.voteComment("2a1c02e0-c98d-11e7-ac28-53c85d19dc6b", "upVote").then((posts)=> {
            console.log(posts)
        })
        const commentEdit = {
            id: "2a1c02e0-c98d-11e7-ac28-53c85d19dc6b",
            timestamp: Date.now(),
            body: 'Edited Edited',
        }
        ReadableAPI.editComment(commentEdit).then((posts)=> {
            console.log(posts)
        })
        ReadableAPI.deleteComment("a561ef00-c98d-11e7-a5c4-1fee16f1444c").then((posts)=> {
            console.log(posts)
        })*/

        /*store.dispatch(addPost ({
            id: uuidv1(),
            timestamp: Date.now(),
            title: 'Action test',
            body: 'Test test!',
            author: 'Test auhtor',
            category: 'redux',
        }))*/
    }

    render() {
        const {post} = this.state
        const { selectPost, requestPosts } = this.props
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
                </p>
                <p>
                    <button onClick={() => selectPost({
                        id: '230923423',
                        timestamp: Date.now(),
                        title: 'Action test',
                        body: 'Test test!',
                        author: 'Test auhtor',
                        category: 'redux'
                    })}>New Post</button>
                    <button onClick={() => selectPost({
                        id: '123456',
                        timestamp: Date.now(),
                        title: 'Action test',
                        body: 'Test test!',
                        author: 'Test auhtor',
                        category: 'redux'
                    })}>New Post</button>
                </p>
            </div>
        );
    }
}

function mapStateToProps ( post ) {
    return {
        post
    }
}

function mapDispatchToProps (dispatch) {
    return {
        selectPost: (data) => dispatch(addPost(data)),
        requestPosts: (data) => dispatch(addPosts(data))
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App)
