import axios from 'axios';
import 'dotenv/config'
import { randomBytes } from 'crypto'
import { otp } from '../Modal/Otp.js';

export const Getopt = async (req, res) => {
    try {
        console.log(req.body)
        const api_key = process.env.OTP_API
        if (!req.body || !req.body.phoneNumber) return res.status(400).json({ "error": "All fields Are Required" });

        // No SMS key set (local development): use a fixed OTP and skip the SMS.
        const useDefaultOtp = !api_key;
        const generatedotp = useDefaultOtp ? 123456 : Math.floor(Math.random() * (999999 - 111111 + 1)) + 111111;
        const sessionId = randomBytes(12).toString('hex');

        const result = await otp.create({
            otp: generatedotp,
            sessionId: sessionId
        })

        if (!result) return res.status(504).json({ 'error': "Gateway Timeout" });

        if (useDefaultOtp) {
            return res.status(200).json({
                message : "Otp Send Sucessfully",
                sessionId: sessionId
            });
        }

        const otpresponse = await axios.get(`https://www.fast2sms.com/dev/bulkV2?authorization=${api_key}&route=dlt&sender_id=USRPMN&message=178735&variables_values=${generatedotp}&numbers=${req.body.phoneNumber}`);

        if (otpresponse.status == 200){
            return res.status(200).json({
                message : "Otp Send Sucessfully",
                sessionId: sessionId
            });
        } else {
            return res.status(503).json({ error: "Message not sent" });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ "error": "Internal Server Error" });
    }
}

export const verifyOtp = async (userotp , sessionId)=>{
    try {
        console.log(userotp , sessionId)
        const result = await otp.findOne({sessionId : sessionId});
        if(!result) return 404
        if(result.otp == userotp) return 200;
    } catch (error) {
        console.log(500);
        return 500
    }
}



