import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import { ConnectDB } from './Database/Dbconnection.js'
import { route as SheduleRouter } from './Router/SheduleRouter.js'
import { route as ScrabRouter } from './Router/Scrabrouter.js'
import { route as UserRouter } from './Router/UserRouter.js'
import { route as OtpRouter } from './Router/Otprouter.js'
const PORT = process.env.PORT

const app = express()
ConnectDB(process.env.DBURL)
const corsOption  = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }

app.use(cors(corsOption))

app.get('/' , (req,res)=>{   
    res.json({"mess" : "Happy Backend"});
})

app.use(express.urlencoded({ extended : false}));
app.use(express.json());


app.use('/api/v1/urbanscrapman/shedule' , SheduleRouter);
app.use('/api/v1/urbanscrapman/scrab' , ScrabRouter);
app.use('/api/v1/urbanscrapman/user' , UserRouter);
app.use('/api/v1/urbanscrapman/otp' , OtpRouter);


app.listen( PORT ,()=>{
    console.log(`Server Started ${PORT}`)
})