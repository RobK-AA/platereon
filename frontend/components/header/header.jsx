import React from 'react';
import { Link } from 'react-router-dom'
import GreetingContainer from '../greeting/greeting_container'

class Header extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    const { currentUser } = this.props;

  
    return currentUser ?

      (
        <div>
          <GreetingContainer />
          <nav className='NavBar'>
            <a href='/'>
              <img src={"assets/platereonlogoimg.png"} /> </a>
            <Link className="header-login" to="/logout">Log out</Link>
            <h4>{currentUser.email}</h4>
          </nav>
        </div>
      )

      :

      (
        <div>
          <nav className='NavBar'>
            <a href='/'>
              <img src={"assets/platereonlogoimg.png"} /> </a>
            <Link className="header-login" to="/login">Log in</Link>
            Nobody signed in - how to make this change when state is updated to reflect there is a current user?
            <Link className="header-signup" to="/signup">Create on Platereon</Link>
          </nav>
        </div>
      )
  }
}

// const Header = ({ currentUser }) => {

//   return currentUser ? 

//   (
//     <div>
//       <nav className='NavBar'>
//         <a href='/'>
//           <img src={"assets/platereonlogoimg.png"} /> </a>
//         <Link className="header-login" to="/logout">Log out</Link>
//         <h4>{currentUser.email}</h4>
//       </nav>
//     </div>
//   )

//   :

//   (
//     <div>
//       <nav className='NavBar'>
//         <a href='/'>
//           <img src={"assets/platereonlogoimg.png"} /> </a>
//         <Link className="header-login" to="/login">Log in</Link>
//         <Link className="header-signup" to="/signup">Create on Platereon</Link>
//       </nav>
//     </div>
//   )

  
  
// };

export default Header;