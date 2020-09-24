import React from 'react';
import { Route, Switch } from 'react-router-dom';
import MainPageContainer from '../main_page/main_page_container';
import UserShowContainer from '../user_show/user_show_container';
import { AuthRoute, ProtectedRoute } from '../../util/route_util';
import SignUpFormContainer from '../signup_form/signup_form_container';
import LogInFormContainer from '../login_form/login_form_container';
import SearchResultsContainer from '../search/search_results_container';
import CommunityContainer from '../community/community_container';
import CommunityFormContainer from '../community_form/community_form_container';
import PostCoverContainer from '../post/post_form_cover';
import PostFormContainer from '../post/post_form_container';

class Body extends React.Component {

  constructor(props) {
    super(props);
    this.props.getCommunities();
  };

  componentDidCatch() {
    if (!this.props.communities.length) {
      this.props.getCommunities();
    }
  }

  render() {
    const { currentUser, location, communities } = this.props;
    
    return (
      <div className="body-container">
          <AuthRoute exact path="/login" component={LogInFormContainer} />
          <AuthRoute exact path="/signup" component={SignUpFormContainer} />
          <AuthRoute exact path="/" component={MainPageContainer} />
          <Route exact path="/communities/:communityId" component={CommunityContainer} />
          <ProtectedRoute exact path="/" communities={communities} component={UserShowContainer} />
          <ProtectedRoute exact path="/createform" component={CommunityFormContainer} />
          <Switch>
            <ProtectedRoute exact path="/postform" component={PostCoverContainer} />
            <ProtectedRoute path="/postform/" component={PostFormContainer} />
          </Switch>

        <Switch>
          <Route exact path="/search" component={SearchResultsContainer} />
        </Switch>
      </div>
    )
  }
};

export default Body;
