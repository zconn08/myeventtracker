json.array! @events do |event|
  json.extract! event, :occasion, :invited_count, :year, :month, :day, :cancelled
end
