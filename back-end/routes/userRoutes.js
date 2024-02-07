import { Router } from 'express';
const router = Router();
import { signupUser, loginUser, logoutUser } from '../controllers/userController.js';

router.post('/signup', signupUser);
router.post('/login', loginUser);
router.post('/logout', logoutUser);

export default router;