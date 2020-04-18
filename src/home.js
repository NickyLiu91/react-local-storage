import React from "react";

class Home extends React.Component {

  state = {
    name: '',
    password: '',
    loggedIn: false
  }

  handleChange = (event) => {
    this.setState({
      [event.target.id]: event.target.value
    })
  }

  submit = () => {
    this.setState({
      loggedIn: true
    }, () => {
      localStorage.setItem("name", this.state.name);
      localStorage.setItem("password", this.state.password);
    })
  }

  componentDidMount = () => {
    const previousName = localStorage.getItem("name")
    const previousPassword = localStorage.getItem("password")

    if (previousName && previousPassword) {
      this.setState({
        name: previousName,
        password: previousPassword,
        loggedIn: true
      })
    }
  }

  logOut = () => {
    this.setState({
      name: '',
      password: '',
      loggedIn: false
    }, () => {
      localStorage.clear()
    })
  }

  render() {
    if (this.state.loggedIn == false) {
      return(
        <div>
        <form>
        Name <input id="name" type="text" onChange={this.handleChange} value={this.state.name}/>
        </form>
        <form>
        Password <input id="password" type="text" onChange={this.handleChange} value={this.state.password}/>
        </form>
        <button onClick={(event) => {this.submit(event)}}>Create Account</button>
        </div>
      )
    } else if (this.state.loggedIn == true && this.state.name != '' && this.state.password != '') {
      return(
        <div>
          <div>
            Welcome {this.state.name}!
          </div>
          <button onClick={(event) => {this.logOut(event)}}>Log Out</button>
        </div>
      )
    }
  }
}

export default Home;
