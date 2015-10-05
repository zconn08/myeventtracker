class EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def root
    
  end
end
