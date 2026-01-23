function Expreciones() {
    const nombre = 'rgadielbg'
    const apellidos = 'Bobadilla Gabriel'
    return (
        <div>
            <h2>Expresiones</h2>
            <h3>Tu nombre es: {nombre} y tus apellidos son: {apellidos} </h3>
            <Lista />
        </div>
    )
}
function Lista() {
    const users = [
        { id: 1, name: 'Mago', role: 'Web Developer' },
        { id: 2, name: 'Gadiel', role: 'Web Designer' },
        { id: 3, name: 'Mario', role: 'Team Lander' }
    ]
    return (
        <div>
            <table>
                <tbody>
                    <tr>
                        <th>Nombre</th>
                        <th>Roles</th>
                    </tr>

                    {
                        users.map(function (user, index) {
                            return (
                                <tr key={index}>
                                    <td>{user.role}</td>
                                    <td>{user.name}</td>
                                </tr>
                            )

                        })
                    }

                </tbody>
            </table>
        </div>
    )
}
export default Expreciones