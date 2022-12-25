// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
  },

  render: function(roomlist) {
    roomlist.forEach(room => {
      if (!Rooms.exists(room)) {
        RoomsView.renderRoom(room);
        Rooms.add(room);
      }
    });
  },

  renderRoom: function(roomname) {
    var template = _.template(
      '<option value="<%- roomname %>"><%- roomname %></option>'
      );
    RoomsView.$select.append(template({roomname: roomname}));
  },

  handleChange: function(event) {
    // TODO: Handle a user selecting a different room.
  },

  handleClick: function(event) {
    // TODO: assign roomname to smth user inputs
    var roomname = 'PLACEHOLDER';
    Rooms.add(roomname);
  }

};
