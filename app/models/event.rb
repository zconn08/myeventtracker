class Event < ActiveRecord::Base
  validates :occasion, :invited_count, :year, :month, :day, presence: true
end
