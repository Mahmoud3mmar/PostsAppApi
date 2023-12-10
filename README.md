# PostsAppApi


# Mongoose Express API

This repository contains a simple Express API using Mongoose for two collections: User and Post.

## User APIs
1. **Sign Up**: Create a new user. (Email must be unique)
2. **Sign In**: Authenticate and log in.
3. **Update User**: Update user information.
4. **Delete User**: Delete a user.
5. **Search Users by Name and Age**: Search for users where the name starts with "X" and age is less than Y.
6. **Search Users by Age Range**: Search for users where the age is between X and Y.
7. **Get All Users**: Retrieve all users.
8. **Get User Profile with Posts**: Retrieve a user's profile along with their posts using populate.

## Post APIs
1. **Add Post**: Add a new post. (Make sure the user already exists)
2. **Delete Post**: Delete a post (Post creator only).
3. **Update Post**: Update a post (Post owner only).
4. **Get All Posts**: Retrieve all posts.
5. **Get All Posts with Owners Information**: Retrieve all posts with their owners' information using populate.
6. **Sort Posts Descending by Date**: Retrieve all posts sorted in descending order by date.














