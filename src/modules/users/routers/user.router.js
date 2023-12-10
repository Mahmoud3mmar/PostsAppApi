import { Router } from "express"

import {  GetAllUsers,
    
    UpdateUser,
    DeleteUser,
    SearchUserbetween,
    SearchUser,
    GetUserProfileWithPosts
    } from "../controllers/users.controller.js"
const router= Router()



router.route('/').get(GetAllUsers)
router.route('/SearchUserBetween').get(SearchUserbetween)
router.route('/SearchUser').get(SearchUser)






router.route('/:id').put(UpdateUser).delete(DeleteUser).get(GetUserProfileWithPosts)

export default router