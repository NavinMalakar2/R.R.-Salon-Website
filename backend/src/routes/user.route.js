import express from 'express';
import { login, logout, ragistration } from '../components/user.componet.js';
import BookingService from '../components/booking.component.js';
import userFeedback from '../components/feedback.component.js';


const router =express.Router();

router.route('/ragister').post(ragistration);
router.route('/login').post(login);
router.route('/logout').get(logout);
router.route('/book').post(BookingService);
router.route('/feedback').post(userFeedback);

export default router;