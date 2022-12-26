var TabsView = {

  $tablist: $('#tablist'),

  initialize: function() {

  },

  renderTab: function(tab) {
    let template = _.template(
      '<button class="tab" value="<%- tab %>"><%- tab %></button>'
    );
    let $tab = $(template({tab: tab}));
    $tab.on('click', TabsView.handleClick);
    TabsView.$tablist.append($tab);
  },

  handleClick: function (event) {
    if (TabsView.$tablist.val() !== event.target.value) {
      // untoggle all other tabs
      for (let tab of TabsView.$tablist.children())
        if ($(tab).attr('class').includes('selected'))
          $(tab).toggleClass('selected');
      $(this).toggleClass('selected');
      TabsView.$tablist.val(event.target.value);
      Tabs.change(event.target.value);
    }
  },

};