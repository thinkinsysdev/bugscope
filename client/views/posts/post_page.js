Template.postPage.helpers({
  currentPost: function() {
    console.log(Posts.findOne(Session.get('currentPostId')));
    return Posts.findOne(Session.get('currentPostId'));
  },
  comments: function() {
    return Comments.find({postId: this._id});
  },
  currentProject: function() {
    console.log(Projects.findOne(Session.get('currentProjectId')));
    return Projects.findOne(Session.get('currentProjectId'));
  }
});

Template.postPageProject.helpers({
  currentPost: function() {
    console.log(Posts.findOne(Session.get('currentPostId')));
    return Posts.findOne(Session.get('currentPostId'));
  },
  comments: function() {
    return Comments.find({postId: this._id});
  },
  currentProject: function() {
    console.log(Projects.findOne(Session.get('currentProjectId')));
    return Projects.findOne(Session.get('currentProjectId'));
  }
});