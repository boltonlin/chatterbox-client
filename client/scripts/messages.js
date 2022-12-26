// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _list: {},
  _size: 0,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add: function (message) {
    if (!Messages._list[message.message_id]) {
      Messages._list[message.message_id] = message;
      Messages._size++;
      return true;
    }
    return false;
  },

  get: function () {
    return Object.values(Messages._list);
  },

  post: function (username, text, roomname) {
    let message = {username: username, text: text, roomname: roomname}
    Parse.create(message);
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

};