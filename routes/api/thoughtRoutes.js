const router = require('express').Router();
const {
  getThoughts,
  getSingleThought,
  createThought,
  deleteThought,
  addReaction,
  removeAllReactions,
  removeReaction,
} = require('../../controllers/thoughtController.js');

// /api/thoughts
router.route('/').get(getThoughts).post(createThought);

// /api/users/:thoughtId
router
  .route('/:thoughtId')
  .get(getSingleThought)
  .delete(deleteThought);

  router.route('/:thoughtId/reactions')
  .post(addReaction)
  .delete(removeAllReactions)

  router.route('/:thoughtId/reactions/:reactionId')
  .delete(removeReaction)

module.exports = router;