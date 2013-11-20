Template.projectPage.helpers({
  currentProject: function() {
    return Projects.findOne(Session.get('currentProjectId'));
  },
  currentProjectPosts: function() {
    //var prjid = Session.get('currentProjectId');
    console.log('Found posts : ' + Posts.find({'projectId':this._id}).count() );
    return Posts.find({'projectId':this._id}, {sort : {submitted:-1}});
  },
  projectPostCount: function () {
    return  Posts.find({'projectId':this._id}).count();
  },
  newPostCount: function() {
    return  Posts.find({'projectId':this._id, 'status':'new'}).count();
  },
  openPostCount: function() {
    return  Posts.find({'projectId':this._id, 'status':'open'}).count();
  }
 
});