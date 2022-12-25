// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
    MessagesView.$chats.on('click', $('.username'), MessagesView.handleClick);
  },

  render: function(messages) {
    // TODO: Render _all_ the messages.
    messages.forEach((message) => {
      if (!(message.username === null &&
            message.text === null &&
            message.roomname === null))
        MessagesView.renderMessage(message);
    });
  },

  renderMessage: function(message) {
    MessagesView.$chats.append(MessageView.render(message));
  },

  handleClick: function(event) {
    // TODO: handle a user clicking on a message
    // (this should add the sender to the user's friend list).
    // TODO: need to not add any innertext to friends list
    var username = event.target.innerText
    Friends.toggleStatus(username);
    console.log(Friends.list);
  }

};