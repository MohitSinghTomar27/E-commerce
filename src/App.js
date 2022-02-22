import React from 'react'
import HomePage from "./pages/homepage/homepage.component";
import {Switch, Route, Redirect} from 'react-router-dom'
import ShopPage from './pages/shop/shop.component.jsx'
import Header from './components/header/header.component.jsx'
import SignInAndSignUpPage from "./pages/sign-in-and-sign-up/sign-in-and-sign-up.component";
import { auth, createUserProfileDocument } from "./firebase/firebase.utils";
import './App.css'
import { connect } from 'react-redux'
import { setCurrentUser } from './redux/user/user.actions'
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  //first checking data is store in db

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
  //     createUserProfileDocument(user);
  //     this.setState({ currentUser: user });

  //     console.log(user);
  //   });
  // }
  // checking if new user added in db

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
  //     if (userAuth) {
  //       const userRef = await createUserProfileDocument(userAuth);

  //       userRef.onSnapshot(snapShot => {
  //         this.setState({
  //           currentUser: {
  //             id: snapShot.id,
  //             ...snapShot.data()
  //           }
  //         }, () => { console.log(this.state, "ssss") })
  //       })
  //     } else {
  //       this.setState({currentUser: userAuth})
  //     }
  //   })
  // }

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
      const {setCurrentUser} = this.props
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot((snapShot) => {
          setCurrentUser(
            {
             
                id: snapShot.id,
                ...snapShot.data(),
            },
            () => {
              console.log(this.state, "ssss");
            }
          );
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }
  render() {
    return (
      <div>
        {/* <Header currentUser={this.state.currentUser} /> */}
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route exact path="/signin" render={() => 
            this.props.currentUser ? (<Redirect to='/'/> ): (<SignInAndSignUpPage />)
          } />
        </Switch>
      </div>
    );
  }
}

const mapStateTopProps = ({ user }) => ({
  currentUser: user.currentUser
})
const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})
export default connect(mapStateTopProps, mapDispatchToProps)(App);
