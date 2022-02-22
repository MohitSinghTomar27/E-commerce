import React from 'react'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './sign-up.styles.scss'

class signUp extends React.Component {
  constructor() {
    super();
    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: "",
    };
  }

  handleSubmit = async event => {
    console.log(event)
    event.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("password don't match")
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(email, password)
      
      createUserProfileDocument(user, { displayName })
      this.setState({
        displayName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch(error) {
      console.error(error)
    }
  }

  handleChange = (event) => {
    const { name, value } = event.target;

    this.setState({[name]: value})
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="sign-up">
        <div className="title">
          <span>Sign up with your email and password</span>

          <form className="sign-up-form" onSubmit={this.handleSubmit}>
            <FormInput
              type="text"
              name="displayName"
              value={this.state.displayName}
              onChange={this.handleChange}
              required
              label="Display Name"
            />
            <FormInput
              type="emaill"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
              required
              label="Email"
            />
            <FormInput
              type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
              required
              label="Password"
            />
            <FormInput
              type="password"
              name="confirmPassword"
              value={this.state.confirmPassword}
              onChange={this.handleChange}
              required
              label="Confirm Password"
            />
            <CustomButton type="button">SIGN UP</CustomButton>
          </form>
        </div>
      </div>
    );
  }
}

export default signUp