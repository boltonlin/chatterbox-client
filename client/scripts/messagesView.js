// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function() {
    MessagesView.clear();
    Messages.get(Rooms.get()).forEach((message) => {
      if (!message.seen)
        MessagesView.renderMessage(message);
    });
  },

  // renders message and attaches any events to the individual chat
  // element, as well marks seen if rendered
  renderMessage: function(message) {
    let $chat = $(MessageView.render(message));
    let $username = $chat.find('.username');
    $username.on('click', MessagesView.handleClick);
    if (Friends.exists(message.username))
      $chat.toggleClass('friend');
    if (!message.read) {
      // attach unread css that switches off on hover
      $chat.toggleClass('unread');
      $chat.on('mouseenter', (event) => {
        $(event.target).removeClass('unread');
      });
    }
    MessagesView.$chats.prepend($chat);
    message.seen = true;
    message.read = true;
  },

  handleClick: function(event) {
    let username = App.clean({input: event.target.innerText});
    Friends.toggleStatus(username);
    $( `div[value="${ username }"` ).toggleClass('friend');
  },

  // clears $chats and reset all seen values
  clear: function () {
    MessagesView.$chats.empty();
    Messages.refreshSeen();
  }

};