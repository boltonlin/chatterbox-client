// MessagesView is an object which controls the DOM elements
// responsible for displaying messages.

var MessagesView = {

  $chats: $('#chats'),

  initialize: function() {
    // TODO: Perform any work which needs to be done
    // when this view loads.
  },

  render: function(filter, options) {
    MessagesView.clear();
    filter ??= message => message.roomname === Rooms.get();
    Messages.get()
      .filter(filter)
      .forEach((message) => {
        if (!message.seen)
          MessagesView.renderMessage(message, options);
      });
  },

  // renders message and attaches any events to the individual chat
  // element, as well marks seen if rendered
  // options: 'f' - don't highlight friends
  //          'r' - include roomname
  renderMessage: function(message, options = '') {
    let $chat = $(MessageView.render(message));
    let $username = $chat.find('.username');
    $username.on('click', null, options, MessagesView.handleClick);
    if (Friends.exists(message.username) && !options.includes('f'))
      $chat.toggleClass('friend');
    if (!message.read) {
      // attach unread css that switches off on hover
      $chat.toggleClass('unread');
      $chat.on('mouseenter', (event) => {
        $(event.target).removeClass('unread');
      });
    }
    if (message.mention && !message.acknowledged) {
      $chat.addClass('mention');
      $chat.on('mouseenter', null, message, (event) => {
        $(event.target).removeClass('mention');
        message.acknowledged = true;
      })
    }
    if (options.includes('r')) {
      $chat.append($(`
        <div class="roominfo">in room
        ${App.clean({input: message.roomname})}
        </div>
      `));
    }
    MessagesView.$chats.prepend($chat);
    message.seen = true;
    message.read = true;
  },

  handleClick: function(event) {
    console.log(event.data);
    let username = App.clean({input: event.target.innerText});
    if (!event.data.includes('f')) {
      Friends.toggleStatus(username);
      if (Friends.exists(username))
        $( `div[value="${ username }"` ).addClass('friend');
      else
        $( `div[value="${ username }"` ).removeClass('friend');
    } else {
      if (confirm(`This will remove ${ username } from your Friends list, are you sure?`)) {
        Friends.toggleStatus(username);
        MessagesView.render(message =>
          Friends.exists(message.username), 'fr');
      }
    }
  },

  // clears $chats and reset all seen values
  clear: function () {
    MessagesView.$chats.empty();
    Messages.refreshSeen();
  }

};