import React from 'react';
import MainPageContainer from '../main_page/main_page_container';
import UserShowContainer from '../user_show/user_show_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignUpFormContainer from '../signup_form/signup_form_container';
import LogInFormContainer from '../login_form/login_form_container';
class Body extends React.Component {

  constructor(props) {
    super(props);
  };

  render() {
    const { currentUser, location } = this.props;

    

    return (

      <div className="body-container">
        
        <AuthRoute exact path="/login" component={LogInFormContainer} />
        <AuthRoute exact path="/signup" component={SignUpFormContainer} />
        <AuthRoute exact path="/" component={MainPageContainer} />
        <ProtectedRoute path="/" component={UserShowContainer} />
        
      </div>
    )
  }

  // render() {
  //   const { currentUser, location } = this.props;

  //   return (

  //     <div className="outer-main">
  //       {(location.pathname === "/login") || (location.pathname === "/signup") 
  //       ?
  //         <>
  //           <AuthRoute exact path="/login" component={LogInFormContainer} />
  //           <AuthRoute exact path="/signup" component={SignUpFormContainer} />
  //         </>
  //       :
  //       currentUser ? <ProtectedRoute component={UserShowContainer} /> : <MainPageContainer />
  //       }
  //     </div>
  //   )
  // }
};

export default Body;
