const axios = require('axios');

function indexRoute(req, res, next) {
  axios({
    method: 'GET',
    url: 'http://api.kano.me/share?limit=100'
  })
    .then(results => {
      console.log(results.data.entries);

      const endResults = results.data.entries.map(share => {
        return {
          id: share.id,
          title: share.title,
          image: share.cover_url,
          likes: share.likes.length,
          username: share.user.username,
          description: share.description
        };
      });
      res.send(endResults);
    })
    .catch(next);
}

function showRoute(req, res, next) {
  axios({
    method: 'GET',
    url: `http://api.kano.me/share?limit=100${req.params.id}`

  }
    .then(data => res.json(data.results))
    .catch(next)
  );
}

module.exports = {
  indexRoute: indexRoute,
  showRoute: showRoute
};
