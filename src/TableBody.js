/*eslint no-unused-expressions: 0*/
const TableBody = (props) => {
    const { tableData } = props

    const rows = tableData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removePerson(index)}>Del</button></td>
            </tr>
        )
    })

    return (
        <tbody>{rows}</tbody>
    )
}

export default TableBody