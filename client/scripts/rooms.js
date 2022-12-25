// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _list: {},
  _current: undefined,

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  add: function (roomname) {
    Rooms._list[roomname] = roomname;
  },

  // gets current room
  get: function () {
    return Rooms._current;
  },

  set: function (roomname) {
    Rooms._current = roomname;
  },

  exists: function (roomname) {
    if (Rooms._list[roomname]) return true;
    else return false;
  },

};