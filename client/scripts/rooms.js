// This object houses all the room _data_ for the app.
// Treat it like a data structure - add methods to interact
// with and manipulate the data.

var Rooms = {

  // TODO: Define how you want to store the list of rooms
  _data: {},

  // TODO: Define methods which allow you to add rooms, update the list,
  // mark a room as selected, etc.

  add: function (roomname) {
    Rooms._data[roomname] = roomname;
  },

  get: function (roomname) {
    return Rooms._data[roomname];
  },

  exists: function (roomname) {
    if (Rooms.get(roomname)) return true;
    else return false;
  },

};