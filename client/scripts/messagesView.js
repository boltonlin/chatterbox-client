// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  // should render ALL messages for specified room
  render: function(messages) {
    Messages.get().forEach((message) => {
      if (!message.seen) {
        MessagesView.renderMessage(message);
        message.seen = true;
      }
    });
  },

  // renders message and attach on-click event to its username
  renderMessage: function(message) {
    let $message = $(MessageView.render(message));
    let $username = $message.find('.username');
    $username.on('click', MessagesView.handleClick);
    MessagesView.$chats.prepend($message);
  },

  handleClick: function(event) {
    let username = event.target.innerText
    Friends.toggleStatus(username);
  }

};