// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  // TODO: Define how you want to store your messages.
  _list: {},
  _size: 0,

  // TODO: Define methods which allow you to retrieve from,
  // add to, and generally interact with the messages.
  add: function (messages) {
    messages.forEach((message) => {
      if (Messages.isValid(message)) {
        Messages._list[message.message_id] = message;
        Messages._size++;
      }
    });
    MessagesView.render(Object.values(Messages._list));
  },

  get: function () {
    return Object.values(Messages._list);
  },

  isValid: function(message) {
    if (!Messages._list[message.message_id] &&
        !(message.username === null &&
        message.text === null &&
        message.roomname === null))
    return true;
    else return false;
  },

  post: function (username, text, roomname) {
    let message = {username: username, text: text, roomname: roomname}
    Parse.create(message);
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

};