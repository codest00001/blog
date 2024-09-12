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
        {
            posts.map((post) => {
                return
                <article>
                    <h3>{post.title}</h3>
                </article>
            })
        }
        </>
    )
}
export default PostList;