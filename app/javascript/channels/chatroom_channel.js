import consumer from 'channels/consumer';

consumer.subscriptions.create('ChatroomChannel', {
  connected() {
    // Called when the subscription is ready for use on the server
  },

  disconnected() {
    // Called when the subscription has been terminated by the server
  },

  received(data) {
    var $messagePartial = jQuery(data.message);
    var currentUser = jQuery('#message_user_id_hidden').val();
    var messageUser = data.user_id;
    var messageOwner = currentUser == messageUser;
    var $messageContainer = jQuery('#messagesContainer');

    var $messageEl = $messagePartial.appendTo($messageContainer);

    console.log($messageEl);

    $messageEl.removeClass('sent received');

    $messageEl.addClass(messageOwner ? 'sent' : 'received');
    $messageEl
      .find('.message-username')
      [messageOwner ? 'addClass' : 'removeClass']('d-none');
    $messageEl.find('.bubble').removeClass('bg-primary-subtle bg-white');
    $messageEl
      .find('.bubble')
      .addClass(messageOwner ? 'bg-primary-subtle' : 'bg-white');
    jQuery('#message_body').val('');
    typeof scrollToBottom !== 'undefined' && scrollToBottom();
  },
});
