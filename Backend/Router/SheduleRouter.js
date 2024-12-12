import express from 'express'
export const route = express.Router();
import { CreateShedule , UpdateStatus , getAllShedules, getPersonalShedule , getStatics } from '../Controller/SheduleController.js';
import { checkisadmin } from '../Middleware/auth.js';


route.post('/sheduleapickup' ,  CreateShedule )
route.patch('/updatestatus/:id' , checkisadmin ,UpdateStatus)
route.get('/getallshedule' , checkisadmin,getAllShedules)
route.get('/getpersonalshedule/:id' , getPersonalShedule)
route.get('/getstatics' , checkisadmin ,getStatics)