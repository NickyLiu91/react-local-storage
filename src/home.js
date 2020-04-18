import React from "react";

class Home extends React.Component {

  state = {
    name: '',
    password: ''
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submit = () => {
    localStorage.setItem("name", this.state.name);
    localStorage.setItem("password", this.state.password);
  }

  render() {
    return(
      <div>
        <div>{this.state.name}</div>
        <div>{this.state.password}</div>
        <div>{localStorage.getItem("name")}</div>
        <div>{localStorage.getItem("password")}</div>
        <form>
          Name <input id="name" type="text" onChange={this.handleChange} value={this.state.name}/>
        </form>
        <form>
          Password <input id="password" type="text" onChange={this.handleChange} value={this.state.password}/>
        </form>
        <button>Create Account</button>
      </div>
    )
  }
}

export default Home;
