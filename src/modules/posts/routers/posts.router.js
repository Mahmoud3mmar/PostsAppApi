import {Router} from "express"

import {GetAllPosts,AddPosts,DeletePost,UpdatePost,GetAllPostsWithOwnersInfo,GetSortedPostsByDate} from "../controllers/posts.controller.js"
const router= Router()

router.route('/').get(GetAllPosts).post(AddPosts)
router.route('/GetAllPostsWithOwnersInfo').get(GetAllPostsWithOwnersInfo)
router.route('/GetSortedPostsByDate').get(GetSortedPostsByDate)
router.route('/:id').delete(DeletePost).put(UpdatePost)

export default router