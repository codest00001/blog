import { Meteor } from 'meteor/meteor';

const CollectionPosts = new Mongo.Collection('posts');

Meteor.startup(async () => {
  if (await CollectionPosts.find().countAsync() === 0){
 const data = {
    createdAt: new Date(),
    title: 'test title',
    content: 'test content'
 }
 CollectionPosts.insertAsync(data);

  }


});
