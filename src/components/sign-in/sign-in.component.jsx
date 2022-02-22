import React from 'react'

import './sign-in.styles.scss'

import FormInput from '../../components/form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import {auth,signInWithGoogle} from '../../firebase/firebase.utils'
class SignIn extends React.Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }
  handleSubmit = async event => {
    console.log(event)
    event.preventDefault()
    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password)
    this.setState({ email: "", password: ""})

    } catch (error) {
      
    }
  }

  handleChange = event => {
    const { value, name } = event.target
    this.setState({[name]: value})
  }
  render() {
    return (  
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            value={this.state.email}
            handleChange={this.handleChange}
            name="email"
            required
            label="email"
          />
          <FormInput
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            name="password"
            label='password'
            required
          />
          <div className="buttons">
          <CustomButton type="button" onClick={this.handleSubmit}>SIGN IN</CustomButton>
          <CustomButton isGoogleSignIn onClick={signInWithGoogle}>SIGN In with Google</CustomButton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn