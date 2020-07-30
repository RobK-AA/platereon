import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.demoUser = {
      email: 'DemoUser',
      password: '123456'
    };
  }

  render() {
    return (
      <div>
        <button 
          onClick={() => {this.props.demoLogin(this.demoUser)}}>
            Sign in as a Demo User
        </button>
      </div>
    );
  }
}

export default Demo;
