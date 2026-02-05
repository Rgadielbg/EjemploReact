import  "./Expreciones.css";
function Expresiones() {
    const nombre='rgadielbg';
    const apellido='BG';


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
        {id:1,name:'Gadiel',role:'web developer'},
        {id:2,name:'Mago',role:'web designer'},
        {id:3,name:'Mario',role:'team leader'},
    ]
    return(
        <div>
            <table>
                <tbody>
                    <tr>
                    <th>Nombre</th>
                   
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