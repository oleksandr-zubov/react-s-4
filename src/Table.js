import React, { Component } from 'react'
import TableHeader from './TableHeader'
import TableBody from './TableBody'

/*eslint no-unused-expressions: 0*/
class Table extends Component {
    render() {
        const { tableData, removePerson } = this.props

        return (
            <table>
                <TableHeader />
                <TableBody tableData={tableData} removePerson={removePerson} />
            </table>
        )
    }
}

export default Table