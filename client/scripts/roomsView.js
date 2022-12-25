// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
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
    // Multiple ways to get value of select...
    // RoomsView.$select.val(), event.target.value,
    // RoomsView.$select.find(':selected').val()
  },

  handleClick: function(event) {
    var roomname = window.prompt('Enter a room name');
    Rooms.add(roomname);
    //TODO: somehow send the server a request to make a room
  }

};
