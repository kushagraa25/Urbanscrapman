import express from 'express'
import { handleLogin , handleCreateAccount } from '../Controller/UserController.js';
export const route = express.Router();


route.post('/createaccount' , handleCreateAccount);
route.post('/login' , handleLogin);

