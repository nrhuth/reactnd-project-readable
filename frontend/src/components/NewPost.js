import React, {Component} from 'react';
import { connect } from 'react-redux';
import { addPost } from '../actions'

class NewPost extends Component {

    constructor(props) {
        super(props)
        this.state = {
            title: '',
            author: '',
            body: '',
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(event) {
        console.log(event.target.title)
        this.setState({
            title: event.target.title,
            /*author: event.target.author,
            body: event.target.body,*/
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const uuidv1 = require('uuid/v1')
        addPost({
            ...this.state,
            timestamp: Date.now(),
            id: uuidv1(),
            category: 'redux',
        })
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Title
                </label>
                <input type="text" value={this.state.title} onChange={this.handleChange}/>
                {/*<label>
                    Author
                </label>
                <input type="text" value={this.state.author} onChange={this.handleChange}/>
                <label>
                    Body
                </label>
                <input type="text" value={this.state.body} onChange={this.handleChange}/>
                <input type="submit" value="Submit" />*/}
            </form>
        )
    }
}

export default NewPost