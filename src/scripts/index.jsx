'use strict';

import React from 'react';

class HelloComponent extends React.Component {  
  render() {
    return <div>Hello!!!</div>;
  }
}

React.render(<HelloComponent />, document.body);