Template.projectList.helpers({
 
  projects: function() 
  { 
    //return Projects.find({tester: {$in: [Meteor.userId()]}},{sort: {submitted: -1}});
    return Projects.find({$or : [{tester: {$in: [Meteor.userId()]}}, {admin: {$in: [Meteor.userId()]}}]});
  },
  noprojects: function() { return Projects.find({$or : [{tester: {$in: [Meteor.userId()]}}, {admin: {$in: [Meteor.userId()]}}]}).count() == 0; },
  projectsReady: function() {
    return projectsHandle.ready();
  },
  allProjectsLoaded: function() {
    return projectsHandle.ready() &&  
      Projects.find().count() < projectsHandle.loaded();
  }
});

Template.projectList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    projectsHandle.loadNextPage();
  }
});
