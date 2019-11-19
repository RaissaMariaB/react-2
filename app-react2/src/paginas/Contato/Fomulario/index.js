import React from 'react'
import Grupo from './Grupo'


class Formulario extends React.Component{
    constructor(props){
        super(props)
        this.state = {
           nome:{
               valor:'' ,
               erro:''
            },
            email:{
                valor: '',
                erro: ''
            },
            pais:{
                valor:'',
                erro:''
            },
            mensagem:{
                valor:'',
                erro:''
            }
         }               
    }
    handleChange = (nomeCampo, valorCampo, erroCampo = '') =>{
                this.setState({
                [nomeCampo]:{
                    valor:valorCampo,
                    erro:erroCampo
                }
            })            
        }
    

    render(){
    //    console.log(this.state);
       
        return(
            <div className='pagina'>
                <h2>Entre em contato conosco!</h2>
                <form className='formulario'>
                    <Grupo erro={this.state.nome.erro}>
                    <Grupo.Legenda htmlFor='nome'> Nome Completo:
                    </Grupo.Legenda>
                    <Grupo.CaixaTexto
                     name='nome'
                     placeholder='Digite seu nome'  
                     mudaEstado={this.handleChange}  
                    />
                    </Grupo>
                                      
                
                </form>
            </div>

        
        )
    }

}

// console.log(Formulario.CaixaTexto)
// <CaixaTexto
// name='nome'
// placeholder='Digite seu nome'  
// mudaEstado={this.handleChange}                         
// />
// <CaixaTexto
// name='email'
// placeholder='Digite seu email'
// mudaEstado={this.handleChange} 
// />
// <CaixaTexto
// name='pais'
// placeholder='Digite seu país'
// mudaEstado={this.handleChange} 
// />
// <CaixaTexto
// nome='mensagem'
// placeholder='Digite sua mensagem'
// mudaEstado={this.handleChange} 
// />

export default Formulario