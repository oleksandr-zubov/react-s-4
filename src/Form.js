import React, { Component } from 'react'

/*eslint no-unused-expressions: 0*/
/*eslint no-unused-vars: 0*/
class Form extends Component {
    initialState = {
        name: '',
        job: ''
    }

    state = this.initialState

    handleChange = (ev) => {
        const {name, value} = ev.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (ev) => {
        this.props.addPerson(this.state)
        this.setState(this.initialState)
    }

    render() {
        const {name, job} = this.state
        return (
            <form>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={name} 
                    onChange={this.handleChange}
                />
                
                <label htmlFor="job">Job:</label>
                <input 
                    type="text" 
                    id="job" 
                    name="job" 
                    value={job} 
                    onChange={this.handleChange}
                />
                
                <input 
                    type="button" 
                    value="Add"
                    onClick={this.handleSubmit}
                />
            </form>
        )
    }
}

export default Form