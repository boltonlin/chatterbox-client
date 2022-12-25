// FormView is an object which houses all the message form functionality.
// Consider the provided code and complete the functionality.
// Apply what you learn here to other interactive views if necessary.

var FormView = {

  $form: $('#send'),
  $message: $('#message'),
  $username: $('#send .username'),

  initialize: function() {
    //TODO: figure out why submit form button is broken with/without comments
    // FormView.$form.on('submit', null, FormView.$message.val(), FormView.handleSubmit);
    FormView.$message.on('focus', FormView.handleClick);
    FormView.$username.text(App.username);
    FormView.$message.val('Enter message here');
  },

  handleSubmit: function(event) {
    //TODO: want to create a message object with correct username and stuff
    console.log(App.username);
    console.log(event.data);
    console.log(Rooms.get());
    Messages.create(App.username, event.data, Rooms.get());
  },

  setStatus: function(active) {
    var status = active ? 'true' : null;
    FormView.$form.find('input[type=submit]').attr('disabled', status);
  },

  handleClick: function(event) {
    event.target.select();
  }

};