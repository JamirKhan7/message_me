class ChatroomController < ApplicationController
  before_action :require_user

  def index
    @messages = Message.collection_with_order_limit
    @message = Message.new
  end
end
