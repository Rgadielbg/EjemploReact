import miImagen from './assets/logo.png';
function Encabezado(){
    return(
        <div>
            <Logotipo/>
            <Menu/>
            <Redes/>
        </div>

    )

}
function Logotipo(){
    return(
        <div>
            <img src={miImagen} alt='Logotipo'/>
        </div>
    )
}
function Menu(){
    return(
        <div>
            <ul>
                <li>Inicio</li>
                <li>Acerca de</li>
                <li>Productos</li>
                <li>Contactos</li>
                <li>sucursales</li>

            </ul>
        </div>
    )
}
function Redes(){
  return(
    <div>
      <ul>
        <li>Facebook</li>
        <li>WhatsApp</li>
        <li>Instagram</li>
        <li>youtube</li>
      </ul>
    </div>
  )
}
export default Encabezado