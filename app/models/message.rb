class Message < ApplicationRecord
  belongs_to :user

  validates :body, presence: true

  scope :collection_with_order_limit, -> { order(:created_at).last(10) }
end
