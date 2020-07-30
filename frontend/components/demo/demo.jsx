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
        <p 
          onClick={() => {this.props.demoLogin(this.demoUser)}}>
            Demo Sign In
        </p>
      </div>
    );
  }
}

export default Demo;
