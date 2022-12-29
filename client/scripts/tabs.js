// TODO: want to make a list of refreshables and add each tab to
// the refreshables which at set intervals will refresh all tabs
var Tabs = {

  _list: {},
  _current: undefined,

  // on add store all messages in that value
  // note it stores messages from oldest to newest
  add: function (roomname) {
    if (!Tabs._list[roomname]) {
      Tabs._list[roomname] = Messages.get(roomname);
      TabsView.renderTab(roomname);
    }
  },

  // needed??
  get: function() {
    return Tabs._current;
  },

  // changes room
  change: function (tab) {
    Rooms.change(tab);
    // mark 'read' on all the messages upon change
  },

  // close tab
  close: function (tabname) {
    delete Tabs._list[tabname];
    // if there are tabs, go to the first remaining tab
    if (!Tabs.isEmpty())
      Rooms.change(Object.keys(Tabs._list)[0]);
  },

  isEmpty: function () {
    if (!Object.keys(Tabs._list).length) return true;
    else return false;
  },

  // should go through each tab
  refresh: function () {

  },


};