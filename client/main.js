newPostsHandle = Meteor.subscribeWithPagination('newPosts', 10);
bestPostsHandle = Meteor.subscribeWithPagination('bestPosts', 10);
openPostsHandle = Meteor.subscribeWithPagination('openPosts', 10);
projectsHandle = Meteor.subscribeWithPagination('projects', 10);
Deps.autorun(function() {
  Meteor.subscribe('projectPosts', Session.get('currentProjectId'));
  Meteor.subscribe('singlePost', Session.get('currentPostId'));
  
  Meteor.subscribe('comments', Session.get('currentPostId'));
})

Meteor.subscribe('notifications');
