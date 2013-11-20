Projects = new Meteor.Collection('projects');

Projects.allow({
  update: ownsDocument,
  remove: ownsDocument
});

Projects.deny({
  update: function(userId, project, fieldNames) {
    // may only edit the following two fields:
    return (_.without(fieldNames, 'title', 'description').length > 0);
  }
});

Meteor.methods({
  addProject: function(projectAttributes) {
    console.log('In the add Project method: ' + projectAttributes.title );
    var user = Meteor.user(),
      projectWithSameTitle = Projects.findOne({title: projectAttributes.title});
    
    // ensure the user is logged in
    if (!user)
      throw new Meteor.Error(401, "You need to login to create new projects");
    
    // ensure the post has a title
    if (!projectAttributes.title)
      throw new Meteor.Error(422, 'Please fill in a title for the project');
    
    // check that there are no previous posts with the same link
    if (projectAttributes.title && projectWithSameTitle) {
      throw new Meteor.Error(302, 
        'This project has already been created', 
        projectWithSameTitle._id);
    }
    console.log('Entered by user  ' + user.username);
                 
    // pick out the whitelisted keys
    var project = _.extend(_.pick(projectAttributes, 'title', 'description'), {
      userId: user._id, 
      owner: user.username, 
      startdate: new Date().getTime(),
      submitted: new Date().getTime(),
      defects: [], defectcount:0
    });
    
    var projectId = Projects.insert(project);
    
    return projectId;
  }
  
  
});