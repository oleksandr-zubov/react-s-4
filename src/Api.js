import React, { Component } from 'react'

class Api extends Component {
    state = {
        data: []
    }

    componentDidMount() {
        const url = 'https://jsonplaceholder.typicode.com/users'

        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                this.setState({
                    data: data
                })
            })
    }

    render() {
        const { data } = this.state
        const result = data.map((item, index) => {
            const { name, username, email } = item


            return <p key={index}>{name}, {email}</p>
        })

        return (
            <>
                <h1>Api</h1>
                <div>{result}</div>
            </>
        )
    }
}

export default Api