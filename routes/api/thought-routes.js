// Import dependencies and controllers
const router = require('express').Router();
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    deleteThought,
    updateThoughtById,
    createReaction,
    deleteReaction,
} = require('../../controllers/thought-controller');

//routes for GET and POST all Thoughts
router.route('/').get(getAllThoughts).post(createThought);

//routes for GET, PUT and DELETE Thoughts
router.route('/:thoughtId').get(getThoughtById).put(updateThoughtById).delete(deleteThought);

//route for POST reaction to a Thought
router.route('/:thoughtId/reactions').post(createReaction);

//route for DELETE reaction to a Thought
router.route('/:thoughtId/reactions/:reactionId').delete(deleteReaction);
// Export the router
module.exports = router;