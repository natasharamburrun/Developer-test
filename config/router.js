const router = require('express').Router();
const shares = require('../controllers/shares');

router.route('/shares')
  .get(shares.indexRoute);

router.route('/shares/:id')
  .get(shares.showRoute);

module.exports = router;
