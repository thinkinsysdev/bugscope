Meteor.publish('newPosts', function(limit) {
  return Posts.find({"status":'new'}, {sort: {submitted: -1}, limit: limit});
});

Meteor.publish('bestPosts', function(limit) {
  return Posts.find({}, {sort: {votes: -1, submitted: -1}, limit: limit});
});

Meteor.publish('openPosts', function(limit) {
  return Posts.find({"status":"open"}, {sort: {votes: -1, submitted: -1}, limit: limit});
});

Meteor.publish('singlePost', function(id) {
  return id && Posts.find(id);
});

Meteor.publish('projectPosts', function(projectid) {
  return projectid && Posts.find({projectId: projectid});
});


Meteor.publish('comments', function(postId) {
  return Comments.find({postId: postId});
});

Meteor.publish('notifications', function() {
  return Notifications.find({userId: this.userId});
});

Meteor.publish('projects', function(limit) {
  return Projects.find({userId: this.userId}, {sort: {submitted: -1}, limit: limit});
});