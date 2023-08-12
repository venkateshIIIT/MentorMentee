const express = require('express');
const viewsController = require('../controllers/viewsController');
const authController = require('../controllers/authController');
const bookingController = require('../controllers/bookingController');

const router = express.Router();
router.get(
  '/',
  bookingController.createBookingCheckout,
  authController.isLoggedIn,
  viewsController.getOverview
);
router.get('/mentor/:id', authController.isLoggedIn, viewsController.getMentor);
router.get('/login', authController.isLoggedIn, viewsController.getLoginForm);
router.get('/signup', viewsController.getSignUpForm);
router.get('/mentordetails/:email', viewsController.mentordetails);
router.get('/createMentor', viewsController.createMentor);
router.get('/me', authController.protect, viewsController.getAccount);
router.get('/mentorLogin', viewsController.getMentorLoginForm);
router.get('/admin', viewsController.admin);
router.get(
  '/mentorReport/:id',
  authController.protect,
  viewsController.ReportMentor
);

router.post(
  '/submit-user-data',
  authController.protect,
  viewsController.updateUserData
);
module.exports = router;
