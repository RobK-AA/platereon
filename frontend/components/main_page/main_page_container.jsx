import { connect } from "react-redux";
import MainPage from './main_page';

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(msp)(MainPage);