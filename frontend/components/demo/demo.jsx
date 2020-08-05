import React from 'react';

class Demo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: 'DemoUser',
      password: '123456'
    };
  }

  render() {
    return (
      
      <div>
        <p 
          onClick={() => {this.props.demoLogin(this.state)}}>
            Demo Sign In
        </p>
      </div>
    );
  }
}

export default Demo;
