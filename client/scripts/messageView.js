// Whereas MessagesView controls the entire list of messages,
// MessageView is responsible for rendering a single message.

var MessageView = {
  // Learn more about Underscore's templating capability
  // here: https://underscorejs.org/#template.
  // TODO: Update this template accordingly.
  render: _.template(`
      <div class="chat" value="<%= message_id %>">
        <span class="username" value="<%- username %>"><%- username %></span> (<span class="github"><%- github_handle %></span>)
        <div class="messageText"><%- text %></div>
      </div>
    `)

};