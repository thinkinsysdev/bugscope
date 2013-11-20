Meteor.Router.add({
  '/': {to: 'newPosts', as: 'home'},
  '/projects' : 'projectList',
  '/best': 'bestPosts',
  '/new': 'newPosts',
    '/open': 'openPosts',
  '/posts/:_id': {
    to: 'postPage', 
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
  'clearErrors': function(page) {
    clearErrors();
    return page;
  }
});
Meteor.Router.filter('requireLogin', {only: 'projectSubmit'});
Meteor.Router.filter('requireLogin', {only: 'postSubmit'});
Meteor.Router.filter('clearErrors');
