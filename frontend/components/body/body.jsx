import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPageContainer from '../main_page/main_page_container';
import UserShowContainer from '../user_show/user_show_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignUpFormContainer from '../signup_form/signup_form_container';
import LogInFormContainer from '../login_form/login_form_container';
import SearchResults from '../search/search_results'
class Body extends React.Component {

  constructor(props) {
    super(props);
  };

  componentWillMount() {
    
    this.props.getCommunities();
    // if (this.props.currentUser) this.props.getMemberships(this.props.currentUser.id);
    // localStorage.setItem('communities', this.props.communities)
  }

  render() {
    const { currentUser, location } = this.props;
    return (

      <div className="body-container">

          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <AuthRoute exact path="/" component={MainPageContainer} />
 
        <Switch>
          <Route exact path="/search" component={SearchResults} />
          <ProtectedRoute exact path="/" component={UserShowContainer} />
        </Switch>
        
        
      </div>
    )
  }
};

export default Body;
