import React, { Component } from 'react';
import './App.css';
import UserView from './components/UserView'

class App extends Component {
  state = {
    users: [],
    fetchedUser: {},
    userInput: 'josh-sea',
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
         Authorization: 'token a71d50e49a6f232b026a72881c94b86a9abe6c51'
            }
        })
        .then(r=>r.json())
        .then(r=>{
          this.setState(prevState=>{
            return {fetchedUser: r, users: [...prevState.users, r]}
          }, ()=>{
            console.log(this.state.fetchedUser, this.state.users);
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
        <form onSubmit ={this.handleSubmit}>
          <input type='text' value={this.state.userInput} onChange={this.handleText} placeholder='Search'/>
          <input type='submit' value='submit'/>
        </form>
        {this.state.fetched && <UserView fetchedUser={this.state.fetchedUser} />}
      </div>
    );
  }
}

export default App;
