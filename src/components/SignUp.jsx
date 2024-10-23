import React, { Component } from 'react'
import './SignUp.css'

export default class MyComponent extends React.Component {

  state = {
    fullName: '',
    email: '',
    password: ''
  }

  handleChangeFullName(event) {
    this.setState({
      fullName: event.target.value
    })
  }
  handleChangeEmail(event) {
    this.setState({
      email: event.target.value
    })
  }
  handleChangePassword(event) {
    this.setState({
      password: event.target.value
    })
  }
  render() {
    return (
      <div className="container">
        <div className="form_area">
          <p className="title">SIGN UP</p>
          <form action="">
            <div className="form_group">
              <label className="sub_title" htmlFor="name">Name</label>
              <input placeholder="Enter your full name" className="form_style" type="text" 
                onChange={(event) => this.handleChangeFullName(event)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="email">Email</label>
              <input placeholder="Enter your email" id="email" className="form_style" type="email"
                onChange={(event) => this.handleChangeEmail(event)}
              />
            </div>
            <div className="form_group">
              <label className="sub_title" htmlFor="password">Password</label>
              <input placeholder="Enter your password" id="password" className="form_style" type="password"
                onChange={(event) => this.handleChangePassword(event)}
              />
            </div>
            <div>
              <button className="btn">SIGN UP</button>
              <p>Have an Account? 
                <a className="link" href="#">Login Here!</a>
              </p>
              <a className="link" href="#"></a>
            </div>
            <a className="link" href=""></a>
          </form>
        </div>
        <a className="link" href=""></a>
      </div>
    )
  }
}
