import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';

const CollectionPosts = new Mongo.Collection('posts')

const PostList = () => {
    const posts = useTracker(() => {
    return CollectionPosts.find().fetch()
    })

    console.log(posts);
        return(
        <>
        <h1>posts list</h1>
        </>
    )
}
export default PostList;