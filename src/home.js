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

  render() {
    return(
      <div>
        <form>
          Name <input id="name" type="text" onChange={this.handleChange} value={this.state.name}/>
        </form>
        <form>
          Password <input id="password" type="text"/>
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default Home;
