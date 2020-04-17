import React from "react";

class Home extends React.Component {

  state = {
    name: '',
    password: ''
  }

  render() {
    return(
      <div>
        <form>
        Name <input type="text"/>
        </form>
        <form>
        Password <input type="text"/>
        </form>
        {this.state.name}
      </div>
    )
  }
}

export default Home;
