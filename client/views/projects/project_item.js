Template.projectItem.helpers({
  ownProject: function() {
    return this.userId == Meteor.userId();
  }
 
  
});
Template.projectItemPage.helpers({
  ownProject: function() {
    return this.userId == Meteor.userId();
  }
 
  
});