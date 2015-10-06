Rails.application.routes.draw do
  root 'events#root'
  resources :events, only: [:index, :create, :update, :destroy]
end
