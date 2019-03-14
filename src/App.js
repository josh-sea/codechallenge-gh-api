import React, { Component } from 'react';
import './App.css';
import UserView from './components/UserView'

class App extends Component {
  state = {
    fetchedUser: {},
    userInput: '',
    fetch: false,
  }

//################################################################################################################
//controlled form search input
  handleText = e => {
    this.setState({userInput: e.target.value})
  }


//################################################################################################################
//fetch helper method
  getUserDetails = () => {
    fetch(`https://api.github.com/users/${this.state.userInput}`,{
      headers:
          {
        'Accept': 'application/vnd.github.v3+json',
         Authorization: 'token e5f543e6e51b463d41a0a4a996be298678a3c8d2'
            }
        })
        .then(r=>r.json())
        .then(r=>{
          this.setState({fetchedUser: r}, ()=>{
            // console.log(this.state.fetchedUser);
            this.setState({fetched: true})
            })
          })
        }

//################################################################################################################
//handle form submit, prevent submit, fetch using search term
  handleSubmit = e => {
    e.preventDefault()
    this.getUserDetails()
  }

  render() {
    return (
      <div className="App">
        <form onSubmit ={this.handleSubmit} style={{marginTop:'10%'}}>
        <h3>Search!</h3>
          <input type='text' value={this.state.userInput} onChange={this.handleText} placeholder='Search'/>
          <input type='submit' value='submit'/>
        </form>
        {this.state.fetched && <UserView fetchedUser={this.state.fetchedUser} userInput={this.state.userInput}/>}
      </div>
    );
  }
}

export default App;
