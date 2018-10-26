import React from 'react';
import axios from 'axios';

class ShowRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      share: []
    };
  }

  componentDidMount(){
    axios({
      method: 'GET',
      url: `/api/shares/${this.props.match.params.id}`
    })
      .then(res => {
        console.log(res.data);
        this.setState({ share: res.data });
      })
      .catch(err => console.log('err', err));
  }

  render() {

    return (
      <section className="section">
        <div className="container-show">
          <figure className="image-show">
            <img src={this.state.share.image} />
          </figure>
          <div className="content-details">
            <p className="title is-4">{this.state.share.title}</p>
            <p className="subtitle is-6">{this.state.share.username}</p>
            <p className="subtitle is-6">{this.state.share.likes}</p>
            <p className="content">{this.state.share.description}</p>
          </div>
        </div>
      </section>
    );
  }
}

export default ShowRoute;
