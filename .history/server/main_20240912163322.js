import { Meteor } from 'meteor/meteor';

const CollectionPosts = new Mongo.Collection('posts');

Meteor.startup(async () => {
  if (await CollectionPosts.find().countAsync() === 0){
    console.log('no db')

  }


});
