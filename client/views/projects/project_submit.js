Template.projectSubmit.events({
  'submit form': function(e) {
    e.preventDefault();
    console.log('Submit form event');
    var project = {
      //url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val(),
      description: $(e.target).find('[name=description]').val()
    }
    
    Meteor.call('addProject', project, function(error, id) {
      if (error) {
        // display the error to the user
        throwError(error.reason);
        
        // if the error is that the post already exists, take us there
        if (error.error === 302) {          Meteor.Router.to('projectPage', error.details); }
      } 
      else {
        Meteor.Router.to('projectPage', id);
      }
    });
  }
});