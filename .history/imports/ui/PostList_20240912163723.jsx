import React from 'react';
import {useTracker} from 'meteor/react-meteor-data';

const CollectionPosts = new Mongo.Collection('posts')

const PostList = () => {
    const posts = useTracker(() => {
    return CollectionPosts.find().fetch()
    })
        return(
        <>
        postlist
        </>
    )
}
export default PostList;