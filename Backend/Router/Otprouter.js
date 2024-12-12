import express from 'express'
export const route = express.Router();
import { Getopt } from '../Controller/OptControlle.js'


route.post('/getotp' , Getopt)
