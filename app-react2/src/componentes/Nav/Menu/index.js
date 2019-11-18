import React from 'react'
import './style.css'



class Menu extends React.Component{
    constructor(props){
    super(props)
    this.state = {
        aberto:false

    }
    }

    handleAbreOuFecha = e =>{
        this.setState(estadoAnterior =>{
            return{
               aberto: !estadoAnterior.aberto
            }
        })
    }

    render(){
        let classesDasOpcoes = 'navbar-menu__opcoes'
        let classesDoBotao = 'navbar-menu__botao'

        if(this.state.aberto){
            classesDasOpcoes += ' navbar-menu__opcoes--aberto'
            classesDoBotao += ' navbar-menu__botao--aberto'
        }
        return(
        <div className="nav-menu navbar-links">
            <span className={classesDoBotao} onClick={this.handleAbreOuFecha}>
                Menu
            </span>
            <ul className={classesDasOpcoes}>
                <li>Home</li>
                <li>Contao</li>
                <li>Mensagem</li>
            </ul>

        </div>
        )

    }
    
}

export  default Menu