function Expresiones() {
    const nombre='Yaneth';
    const apellido='Garrido Hernandez';


    return(
        <div>
            <h2>Expresiones</h2>
            <h3>Tu nombre es {nombre} y tus apellidos son {apellido}</h3>
            <Lista/>
        </div>
    )
}

function Lista(){
    const users=[
        {id:1,name:'Yaneth',role:'web developer'},
        {id:2,name:'Gadi',role:'web designer'},
        {id:3,name:'Mario',role:'team leader'},
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                    <th>Nombre</th>
                    <td>Role</td>
                    </tr>
                         {
                            users.map(function(user, index){
                                return(
                                    <tr key={index}>
                                    <td>{user.name}</td>
                                    <td>{user.role}</td>
                                    </tr>
                                )
                         })
                        
                        }
                  
                </tbody>
            </table>

        </div>
    )
}



export default Expresiones