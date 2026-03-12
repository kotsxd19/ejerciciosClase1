import React from 'react';

//Componente
                //parametros
const Boton = ({titulo, accion}) => {
    return(
        <button className='estiloBoton' onClick={accion}>
            {titulo}
        </button>
    )
}


export default Boton


