// Fixture data 
// Fixture data 
if (! Meteor.users.findOne({'username':'tanmay'}) )
{
    Accounts.createUser({
        username: 'tanmay',
        email: 'tanmay@fxt.com',
        password: 'asdfasdf',
        profile: {
            first_name: 'fname',
            last_name: 'lname',
            company: 'company',
        }
    }); //Added close parenthesis.
}
var userID = Meteor.users.findOne({"username":"tanmay"});
var testerID = Meteor.users.findOne({"username":"tan80"});

Posts.remove({});
Projects.remove({});
if (Projects.find().count() === 0) {
  
  
  var now = new Date().getTime();
  
  var prjId = Projects.insert({
    title: 'Introducing Telescope',
    userId: userID._id,
    author: userID.profile.name,
    owner: userID.username,
    admin: [userID._id],
    tester: [testerID._id],
      description: 'First Project Entry',
      startdate: new Date().getTime(),
      submitted: new Date().getTime(),
      defects: [], defectcount:0
  });
  
  
  // create two users
  var tomId = Meteor.users.insert({
    profile: { name: 'Tom Coleman' }
  });
  var tom = Meteor.users.findOne(tomId);
  var sachaId = Meteor.users.insert({
    profile: { name: 'Sacha Greif' }
  });
  var sacha = Meteor.users.findOne(sachaId);
  var telescopeId = Posts.insert({
    title: 'Introducing Telescope',
    projectId: prjId,
    userId: sacha._id,
    author: sacha.profile.name,
    url: 'http://sachagreif.com/introducing-telescope/',
    status: 'open',
    submitted: now - 7 * 3600 * 1000,
    commentsCount: 2,
    upvoters: [], votes: 0
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: tom._id,
    author: tom.profile.name,
    submitted: now - 5 * 3600 * 1000,
    body: 'Interesting project Sacha, can I get involved?'
  });
  
  Comments.insert({
    postId: telescopeId,
    userId: sacha._id,
    author: sacha.profile.name,
    submitted: now - 3 * 3600 * 1000,
    body: 'You sure can Tom!'
  });
  
  Posts.insert({
    title: 'Meteor',
    userId: tom._id,
     projectId: prjId,
    author: tom.profile.name,
    url: 'http://meteor.com',
    status: 'new',
    submitted: now - 10 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  
  Posts.insert({
    title: 'The Meteor Book',
    userId: tom._id,
     projectId: prjId,
    author: tom.profile.name,
    url: 'http://themeteorbook.com',
    status: 'open',
    submitted: now - 12 * 3600 * 1000,
    commentsCount: 0,
    upvoters: [], votes: 0
  });
  var nstatus ='open';
  for (var i = 0; i < 10; i++) {
    
    if (nstatus=='new') 
      nstatus='open';
   else nstatus = 'new';
    console.log('status : ' + nstatus);
 
    
    prjId =  Projects.insert({
    title: 'Test Project#' + i,
    userId: userID._id,
    author: userID.profile.name,
       owner: userID.username,
     admin: [userID._id],
    tester: [testerID._id],
      description: 'Test Project for testing ' + i,
      startdate: new Date().getTime(),
      submitted: new Date().getTime(),
      defects: [], defectcount:0
  });
       Posts.insert({
      title: 'Defect Found #' + i,
         description: "Defect found while testing Browser version " + i,
       projectId: prjId,
      author: sacha.profile.name,
      userId: sacha._id,
      url: 'http://google.com/?q=test-' + i,
      status: nstatus,
      submitted: now - i * 3600 * 1000 + 1,
      commentsCount: 0,
      upvoters: [], votes: 0
    });     
    
  }
}