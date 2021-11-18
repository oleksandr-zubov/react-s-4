import React, { Component } from "react"
import Form from "./Form"
import Table from './Table'

/*eslint no-unused-expressions: 0*/
class App extends Component {
    state = {
        people: []
    }

    addPerson = (person) => {
        const { people } = this.state

        // this.setState({
        //     people: people.concat(person)
        // })

        this.setState({
            people: [...people, person]
        })
    }

    removePerson = (index) => {
        const { people } = this.state

        this.setState({
            people: people.filter((person, i) => {
                return i !== index
            })
        })
    }

    render() {
        const { people } = this.state

        return (
            <div className="App">
                <Form addPerson={this.addPerson} />
                <Table tableData={people} removePerson={this.removePerson} />
            </div>
        )
    }
}

export default App