const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought);

module.exports = router;