import React from 'react'


function CaixaTexto (props){

function validaCampo(e){
    props.mudaEstado(e.target.name, e.target.value)

    // console.log(e.target.name);
    // console.log(e.target.name, e.target.value);    
    }

    return(
        <input
        name={props.name}
        type= 'text'
        className ='campo'
        placeholder = {props.placeholder}
        onChange = {validaCampo}/>    
    )
}


export default CaixaTexto