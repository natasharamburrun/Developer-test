import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class IndexRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      data: []
    };
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
    return (
      <div className="columns is-multiline">
        {this.state.data.map(share =>
          <div className="card column is-one-quarter-desktop is-one-third-tablet" key={share.id}>
            <Link to={`/share/${share.id}`}>
              <div className="card-image">
                <figure className="image is-4by3">
                  <img src={share.image} alt="Shared item image" />
                </figure>
              </div>
              <div className="card-content">
                <div className="media">
                  <div className="content-title">
                    <h2 className="title is-6 share-title">{share.title}</h2>
                    <h2 className="title is-6 share-username">{share.username}</h2>
                    <p className="subtitle is-6">{share.likes}</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        )}
      </div>
    );
  }
}

export default IndexRoute;
