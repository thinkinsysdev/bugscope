Template.projectListTags.helpers({
  projects: function() {
    return Projects.find({$or : [{tester: {$in: [Meteor.userId()]}}, {admin: {$in: [Meteor.userId()]}}]});
  },
  projectCount: function(){
  	console.log(Projects.find({$or : [{tester: {$in: [Meteor.userId()]}}, {admin: {$in: [Meteor.userId()]}}]}).count());
    return Projects.find({$or : [{tester: {$in: [Meteor.userId()]}}, {admin: {$in: [Meteor.userId()]}}]}).count();
    
  }
});

