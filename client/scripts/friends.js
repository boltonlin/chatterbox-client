// This object houses all the friend _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Friends = {
  // TODO: Define how you want to store your list of friends.

  list: {},

  // TODO: Define methods which allow you to add, toggle,
  // and check the friendship status of other users.

  toggleStatus: function (username) {
    if (!!Friends.list[username]) {
      delete Friends.list[username];
    } else {
      Friends.list[username] = username;
    }
  },

};