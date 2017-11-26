import React, {Component} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { addPost } from '../actions'
import * as ReadableAPI from '../utils/readableAPI.js'
import { addPosts } from '../actions'

class Posts extends Component {

    componentDidMount() {
        ReadableAPI.getPosts().then((posts) => {
            this.props.requestPosts(posts)
        })
    }

    render() {
        console.log(this.props);
        return (
            this.props.posts.post.map(post => (
                <article key={post.id}>
                    <h1>{post.title}</h1>
                    <p>
                        <span>Published: {post.timestamp} | Author: {post.author} | Category: {post.category}</span>
                    </p>
                    <content>
                        {post.body}
                    </content>
                </article>
            ))
        )
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
)(Posts)