const express = require('express');
const mentorController = require('./../controllers/mentorController');
const authController = require('../controllers/authController');
const reviewRouter = require('./reviewRoutes');

const router = express.Router();

// router.param('id', tourController.checkID);

// POST /mentor/234fad4/reviews
// GET /mentor/234fad4/reviews

router.use('/:mentorId/reviews', reviewRouter);

router.route('/loginsend').post(mentorController.sendmessage);

router.route('deleteMentor/:id', mentorController.deleteMentorProfile);

router
  .route('/top-5-cheap')
  .get(mentorController.aliasTopMentors, mentorController.getAllMentors);

router.route('/mentor-stats').get(mentorController.getMentorStats);
// following the RESTAPI principle so we haven't mention the task in the endpoint using http mentods we going to write
router
  .route('/')
  .get(mentorController.getAllMentors)
  .post(mentorController.createMentor);

router
  .route('/:id')
  .get(mentorController.getMentor)
  .patch(
    authController.protect,
    authController.restrictTo('admin', 'lead-guide'),
    mentorController.updateMentor
  )
  .delete(
    authController.protect,
    authController.restrictTo('admin'),
    mentorController.deleteMentor
  );

module.exports = router;
