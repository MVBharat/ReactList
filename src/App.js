import React, { Component } from 'react';
import User from './components/User'
import UniqueId from 'react-html-id'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  constructor(){
    super()
    UniqueId.enableUniqueIds(this)
    this.state = {
        users: [
          {id: this.nextUniqueId(), name: 'Bharat', age: 25},
          {id: this.nextUniqueId(), name: 'Ram', age: 28},
          {id: this.nextUniqueId(), name: 'Kedari', age: 30 }
        ]
      }
      console.log(this.state)
  }

    deleteUser = (index, e) =>{
    const users = Object.assign([] , this.state.users)
    users.splice(index, 1)
    this.setState({users:users})
  }

  changeUserName = (id, e) => {
    const index = this.state.users.findIndex((user) => {
      return user.id === id
    });

    const user  = Object.assign({}, this.state.users[index])

    user.name = e.target.value
    
    const users = Object.assign([] , this.state.users)
    users[index] = user;

    this.setState({users:users})

  }

  render() {
    return (
      <div className="App">
        <ul>{

          this.state.users.map((user, index)=>{
            return( <User 
              age={user.age}
              key ={user.id}
              delEvent={this.deleteUser.bind(this, index)}
              changeEvent= {this.changeUserName.bind(this, user.id)}
              >{user.name}</User>)
          })
        }
        </ul>
      </div>
    );
  }
}

export default App;
