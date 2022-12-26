// RoomsView is an object which controls the DOM elements
// responsible for displaying and selecting rooms.

var RoomsView = {

  $button: $('#rooms button'),
  $select: $('#rooms select'),

  initialize: function() {
    RoomsView.$button.on('click', RoomsView.handleClick);
    RoomsView.$select.on('change', RoomsView.handleChange);
  },

  render: function(roomlist) {
    let renderedRooms = $.map(RoomsView.$select.find($('option')), option => option.value)
    roomlist.forEach(room => {
      if (!renderedRooms.includes(room))
        RoomsView.renderRoom(room);
    });
  },

  renderRoom: function(roomname) {
    var template = _.template(
      '<option value="<%- roomname %>"><%- roomname %></option>'
      );
    RoomsView.$select.append(template({roomname: roomname}));
  },

  handleChange: function(event) {
    Rooms.change(RoomsView.$select.val());
  },

  handleClick: function(event) {
    var roomname = window.prompt('Enter a room name');
    Rooms.add([roomname]);
    RoomsView.renderRoom(roomname);
    RoomsView.$select.val(roomname);
    Rooms.change(roomname);
  }

};
