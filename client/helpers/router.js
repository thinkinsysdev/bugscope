Meteor.Router.add({
  '/': {to: 'projectList', as: 'home'},
  '/projects' : 'projectList',
  '/best': 'bestPosts',
  '/new': 'newPosts',
    '/open': 'openPosts',
  '/posts/:_id': {
    to: 'postPageProject', 
    and: function(id) { Session.set('currentPostId', id); }
  },
  
  '/posts/:_id/edit': {
    to: 'postEdit', 
    and: function(id) { Session.set('currentPostId', id); }    
  },
    '/projects/:_id': {
    to: 'projectPage', 
    and: function(id) { Session.set('currentProjectId', id); }
  },
    '/projects/:_id/edit': {
    to: 'projectEdit', 
    and: function(id) { Session.set('currentProjectId', id); }
  },
  '/submit': 'postSubmit',
 
  '/addProject':'projectSubmit'
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  },
  'requireUser': function(page) {
    if (Projects.findOne({_id:Session.get('currentProjectId'),$or : [{tester: {$in: [Meteor.userId()]}}, {admin: {$in: [Meteor.userId()]}}]})) 
      //Projects.find({_id:prjid,$or : [{tester: {$in: [Meteor.userId()]}}, {admin: {$in: [Meteor.userId()]}}]}).count()
      return page;
     else if  (Meteor.loggingIn())
       return 'loading'
      else
        return 'accessDeniedDefect';
  },
  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});
Meteor.Router.filter('requireLogin', {only: ['projectSubmit', 'postSubmit']});
Meteor.Router.filter('requireUser', {only:  'postSubmit'});
//Meteor.Router.filter('requireLogin', {only: 'postSubmit'});
Meteor.Router.filter('clearErrors');
