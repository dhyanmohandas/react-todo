import React, { Component } from 'react';

import NewTodo from './NewTodo';

class Header extends Component{
    constructor(){
        super()
        this.state = {
           showNewTodo: false
        }
        this.showNew = this.showNew.bind(this)
     }
  
    showNew(){
        console.log("Entered");
        this.setState(prevState => {
            console.log(!prevState.showNewTodo);
            return { showNewTodo: !prevState.showNewTodo } 
      })

    }
    render(){
        let buttonText =  this.state.showNewTodo ? '-' : '+' ;
        return(
            
        <div>
            <span><button className="round-button" onClick={this.showNew}>{buttonText}</button><h1>React TODO</h1></span>
            { this.state.showNewTodo ? <NewTodo /> : null }
        </div>
        )
    }
}
export default Header;