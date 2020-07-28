import { connect } from "react-redux";

const msp = state => ({
  currentUser: state.entities.users[state.session.id]
});

export default connect(msp)(Header);