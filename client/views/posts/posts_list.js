Template.newPosts.helpers({
  options: function() {
    return {
      sort: {submitted: -1},
      query: {"status":"new"},
      handle: newPostsHandle
    }
  }
});

Template.bestPosts.helpers({
  options: function() {
    return {
      sort: {votes: -1, submitted: -1},
      query: {"status":"new"},
      handle: bestPostsHandle
    }
  }
});

Template.openPosts.helpers({
  options: function() {
    return {
      sort: {votes: -1, submitted: -1},
      query: {"status":"open"},
      handle: openPostsHandle
    }
  }
});

Template.postsList.helpers({
  postsWithRank: function() {
    var i = 0, vquery=this.query, options = {sort: this.sort, limit: this.handle.limit()};
    return Posts.find(vquery, options).map(function(post) {
      post._rank = i;
      i += 1;
      return post;
    });
  },

  postsReady: function() {
    return this.handle.ready();
  },
  allPostsLoaded: function() {
    return this.handle.ready() &&  
      Posts.find().count() < this.handle.loaded();
  }
});

Template.postsList.events({
  'click .load-more': function(e) {
    e.preventDefault();
    this.handle.loadNextPage();
  }
});
