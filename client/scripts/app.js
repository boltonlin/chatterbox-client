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

    App.refresh();
  },

  fetch: function(callback = ()=>{}) {
    Parse.readAll((data) => {
      Messages.add(data);
      Rooms.add(data);
    });
    callback();
  },

  // should fetch messages only for selected room
  fetchRoom: function (roomname, callback = ()=>{}) {
    Parse.readRoom(roomname, (data) => {
      Messages.add(data);
      Rooms.add(data);
    });
    callback();
  },

  refresh: function () {
    App.startSpinner();
    App.fetch(App.stopSpinner);
  },

  startSpinner: function() {
    App.$spinner.show();
    FormView.setStatus(true);
  },

  stopSpinner: function() {
    App.$spinner.fadeOut('fast');
    FormView.setStatus(false);
  },

  clean: _.template('<%- input %>'),

};
