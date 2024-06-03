import express from 'express';
import userController from '../controllers/user_Controller.js';

const router = express.Router();

// Base route
router.get('/', (req, res) => {
	res.send('Welcome to Kryptonian App BACKEND API');
});

// Authentication routes
router.post('/register', userController.register);
router.get('/confirm-email', userController.confirmEmail);
router.post('/login', userController.login);
router.post('/verify-otp', userController.verifyOTP);

// API Key route
router.post('/api-key/create', userController.createApiKey);
router.post('/api-key/invalidate', userController.invalidateApiKey);

router.get('/logout', userController.logout);

export default router;
