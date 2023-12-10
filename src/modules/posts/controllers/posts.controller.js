

import PostModel from '../models/posts.model.js'
import UserModel from '../../users/models/user.model.js'
import users from '../../users/models/user.model.js'
import { AppError, catchError } from '../../../utils/erroer.handler.js'


const GetAllPosts = catchError( async (req,res)=>{
   
       const data = await PostModel.find()
       res.json({data})
   
})
const AddPosts = catchError(async (req, res) => {
    
        const { userID, title, content } = req.body;

        // Check if the user with the provided userID exists
        const existingUser = await UserModel.findById(userID);

        if (!existingUser) {
             throw new AppError('User not found',404)
        }

        // Assuming 'PostModel' is the Mongoose model for your 'posts' collection
        const newPost = await PostModel.create({
            title,
            content,
            userID
        });

        res.json({ post: newPost });
    
});

const DeletePost = catchError(async (req, res) => {
    
        const {postID} = req.params;
        const {userID} = req.body;  // Assuming the userID of the user making the request is provided in the request body

        // Find the post by ID
        const post = await PostModel.findById(postID);

        // Check if the post exists
        if (!post) {
            throw new AppError('Post not found.',404)
            
        }

        // Check if the user making the request is the creator of the post
        if (post.userID.toString() !== userID) {
            throw new AppError('You are not authorized to delete this post.',403)
        }

        // If the user is the creator, delete the post
        await PostModel.findByIdAndDelete(postID);

        res.json({ message: 'Post deleted successfully.' });
   
});


const UpdatePost = catchError(async (req, res) => {
    
        const {postID} = req.params;
        const {userID,newTitle,newContent} = req.body;

        // Find and update the post by ID
        const updatedPost = await PostModel.findByIdAndUpdate(
            postID,
            {
                $set: {
                    title: newTitle,
                    content: newContent
                }
            },
            { new: true } // This option returns the modified document rather than the original
        );


        // Check if the post exists
        if (!updatedPost) {
            throw new AppError('Post not found.',404)
          
        }

        // Check if the user making the request is the creator of the post
        if (updatedPost.userID.toString() !== userID) {
            throw new AppError('You are not authorized to update this post.',403)

        }

        

        res.json({ message: 'Post updated successfully.', updatedPost: post });
    
});


const GetAllPostsWithOwnersInfo = catchError(async (req, res) => {
    
        const postsWithOwners = await PostModel.find().populate('userID');

        res.json({ postsWithOwners });
    
});

const GetSortedPostsByDate = catchError(async (req, res) => {
    
        const sortedPosts = await PostModel.find().sort({ createdAt: -1 }).populate('userID');

        res.json({ sortedPosts });
   
});
export{
    GetAllPosts ,
    AddPosts,
    DeletePost,
    UpdatePost,
    GetAllPostsWithOwnersInfo,
    GetSortedPostsByDate
}