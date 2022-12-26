// TODO: want to make a list of refreshables and add each tab to
// the refreshables which at set intervals will refresh all tabs
var Tabs = {

  _list: {},
  _current: undefined,

  // on add store all messages in that value
  // note it stores messages from oldest to newest
  add: function (roomname) {
    Tabs._list[roomname] = Messages.get(roomname);
    TabsView.renderTab(roomname);
  },

  // needed??
  get: function() {
    return Tabs._current;
  },

  // should change chats to only display messages from that room
  // also request updated messages for that room
  // probably set room too
  change: function (tab) {
    Rooms.change(tab);
  },

};