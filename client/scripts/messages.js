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
  },

  // returns an array of messages
  get: function (roomname) {
    if (!!roomname) {
      return Object.values(Messages._list)
                   .filter(message => message.roomname === roomname);
    } else return Object.values(Messages._list);
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
    let message = {
      username: username,
      text: text,
      roomname: roomname
    }
    App.startSpinner();
    Parse.create(message, () => {
      App.refresh(App.renderRoomCB);
    });
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