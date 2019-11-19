import React from 'react'

import CaixaTexto from './CaixaTexto'
import Legenda from './Legenda'



function Grupo (props){
    return(
        <div>
            {props.children}
            {props.erro && <p className='grupo__erro'> {props.erro}</p>}
        </div>
    )
}

Grupo.Legenda= Legenda
Grupo.CaixaTexto=CaixaTexto

export default Grupo


