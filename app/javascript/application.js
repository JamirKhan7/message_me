// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
//= require jquery3
//= require popper
//= require bootstrap

window.scrollToBottom = function () {
  var $chatBody = jQuery('.chat-body');
  if ($chatBody.length > 0) {
    $chatBody.scrollTop($chatBody[0].scrollHeight);
  }
};

jQuery(document).ready(function () {
  scrollToBottom();
});

import '@hotwired/turbo-rails';
import 'controllers';
import 'channels';
