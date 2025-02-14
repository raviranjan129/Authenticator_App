
import  express  from 'express';
import { signup, singin } from '../Controller/userController.js';


const router=express.Router();

router.post('/signup',signup);
router.get('/signin',singin);

export default router;