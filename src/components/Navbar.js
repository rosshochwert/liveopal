import React from 'react'
import { Link } from 'gatsby'
import github from '../img/github-icon.svg'
import logo from '../img/logo.png'

const Navbar = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <div className="navbar navbar-light navbar-expand-lg fixed-top bg-light p-1 shadow">
         <div className="container">
            <a className="navbar-brand headerFont" href="#">
              <img src={logo} height="100" className="d-inline-block align-top mobileLogo"/>
            </a>
            <div className="collapse navbar-collapse" id="navbarCollapse">
               <ul className="navbar-nav">
                  <a className="nav-link" href=""></a>
                  <a className="nav-link" href="/#offer">How It Works</a>
                  <a className="nav-link" href="#">About</a>
               </ul>
            </div>
            <div>
               <button className="btn joinButton"><a className="topJoin" href="/#join">Join Now</a></button>
            </div>
            <button className="navbar-toggler toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
         </div>
      </div>
    )
  }
}

export default Navbar
