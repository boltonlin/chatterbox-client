// This App object represents the Chatterbox application.
// It should initialize the other parts of the application
// and begin making requests to the Parse API for data.

var App = {

  $spinner: $('.spinner img'),

  username: 'anonymous',

  initialize: function() {
    App.username = window.location.search.substr(10);

    FormView.initialize();
    RoomsView.initialize();
    MessagesView.initialize();

    App.startSpinner();
    App.fetch(() => {
      RoomsView.render();
      Rooms.set('lobby');
    });
    App.fetchRoom(Rooms.get(), App.renderRoomCB);

    setInterval(() => {
      App.startSpinner();
      App.refresh(App.renderRoomCB);
      Tabs.refresh(App.stopSpinner);
    }, 5000);
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Messages.add(data);
      Rooms.add(data);
      callback();
    });
  },

  // should fetch messages only for selected room
  fetchRoom: function (roomname, callback = ()=>{}) {
    Parse.readRoom(roomname, (data) => {
      Messages.add(data);
      callback();
    });
  },

  refresh: function (callback = ()=>{}) {
    App.fetch(RoomsView.render);
    App.fetchRoom(Rooms.get(), callback);
  },

  // TODO: find a way to also stop user from clicking close tabs
  startSpinner: function() {
    App.$spinner.show();
    RoomsView.setStatus(true);
    FormView.setStatus(true);
    let tablist = Tabs.get()
    for(let tab in tablist)
      tablist[tab]['view'].off('click');
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    RoomsView.setStatus(false);
    FormView.setStatus(false);
    let tablist = Tabs.get()
    for(let tab in tablist)
      tablist[tab]['view'].on('click', null, tab, TabsView.handleClick);;
  },

  // typical callback used to render messages for current room
  renderRoomCB: function () {
    MessagesView.render(Rooms.get());
    App.stopSpinner();
  },

  clean: _.template('<%- input %>'),

};
