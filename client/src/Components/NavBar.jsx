import React, { Component } from 'react';
import { withRouter, NavLink as Link } from 'react-router-dom';
// import Home from './Home';


class NavBar extends Component {

  handleEvent = (event)  => {
    const elem = event.target;
    if( elem.classList.contains("active") && this.props.location.pathname === elem.getAttribute("href") ){
      event.preventDefault();
    }
  }

  render() {
    return (
      <nav>
        <div className="container">
          <Link activeClassName="active" exact onClick={this.handleEvent} title="Página principal" to="/">Home</Link>
          <Link activeClassName="active" onClick={this.handleEvent} title="Pacientes" to="/pacientes">Pacientes</Link>
          <Link activeClassName="active" onClick={this.handleEvent} title="Obras Sociales" to="/obras-sociales">Obras Sociales</Link>
        </div>
      </nav>
    )
  }
}

export default withRouter(NavBar)