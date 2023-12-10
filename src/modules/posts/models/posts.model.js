import { Schema, model } from 'mongoose';

// Post model
const postSchema = new Schema({
    title: String,
    content: String,
    userID: { type: Schema.Types.ObjectId, ref: 'User' } // Reference to User model
});

const PostModel = model('Post', postSchema);
export default PostModel