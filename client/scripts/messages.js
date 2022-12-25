// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _data: null,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.

  create: function (username, text, roomname) {
    Parse.create({username: username, text: text, roomname: roomname});
    //TODO: want to tell app to fetch after sending a message
    // App.fetch();
  },

};