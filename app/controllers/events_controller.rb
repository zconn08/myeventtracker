class EventsController < ApplicationController
  def index
    @events = Event.all
  end

  def create
    @event = Event.new(event_params)
    if @event.save
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def root
  end

  def update
    @event = Event.find(params[:id])
    if @event.update_attributes(event_params)
      render json: @event
    else
      render json: @event.errors.full_messages, status: 422
    end
  end

  def destroy
    @event = Event.find(params[:id])
    @event.destroy
    render json: @event
  end

  private
  def event_params
    params.require(:events).permit(:occasion, :invited_count, :day, :month, :year, :cancelled)
  end
end
