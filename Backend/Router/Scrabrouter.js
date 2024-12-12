import express from 'express'
import { addscrab , UpdateScrabData , getRates } from '../Controller/ScrabController.js'
import { checkisadmin } from '../Middleware/auth.js'
export const route = express.Router()


route.post('/addscrab' ,checkisadmin ,addscrab)
route.patch('/updatescrab/:id' , checkisadmin ,UpdateScrabData)
route.get('/getrates' , getRates)