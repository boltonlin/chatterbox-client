// This object houses all the message _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Messages = {

  _list: {},
  _size: 0,

  add: function (messages) {
    messages.forEach((message) => {
      if (Messages.isValid(message)) {
        Messages._list[message.message_id] = message;
        Messages._size++;
      }
    });
    MessagesView.render(Object.values(Messages._list), Rooms.get());
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
    App.refresh();
  },

  refreshSeen: function () {
    for (let id in Messages._list)
      Messages._list[id].seen = false;
  },

  clean: function (message) {
    message.username = App.clean({input: message.username});
    message.text = App.clean({input: message.text});
    message.roomname = App.clean({input: message.roomname});
  }

};