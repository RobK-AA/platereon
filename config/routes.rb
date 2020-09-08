Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :communities, only: [:index, :create, :show, :update]

    resources :users, only: [:create, :show] do
      resources :memberships, only: [:index]
    end

    resources :memberships, only: [:create, :destroy]
    resource :session, only: [:new, :create, :destroy]
  end
  
  root 'static_pages#root'

end
