import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class IndexRoute extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentDidMount(){
    axios({
      method: 'GET',
      url: '/api/shares/'
    })
      .then(res => this.setState({ data: res.data }))
      .catch(err => console.log('err', err));
  }

  render() {
    console.log(this.state);
    return (
      <div>
        
      </div>
    );
  }
}

export default IndexRoute;
