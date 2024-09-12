import { Meteor } from 'meteor/meteor';

const CollectionPosts = new Mongo.Collection('posts');

Meteor.startup(async () => {
  await CollectionPosts.find().countAsync()

});
