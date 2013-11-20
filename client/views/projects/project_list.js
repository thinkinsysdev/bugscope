Template.projectList.helpers({
 
  projects: function() { return Projects.find({}, {sort: {submitted:-1}});},
  noprojects: function() { return Projects.find({}).count() == 0; },
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
