import {Router } from "express"
import {SignIN,SignUp} from '../controllers/Auth.controller.js'
import checkUniqueEmail from "../middlewares/auth.middleware.js"

const router = Router()


router.use('/Signin',SignIN)
router.use('/Signup',checkUniqueEmail,SignUp)



export default router