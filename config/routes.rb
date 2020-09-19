Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    resources :communities, only: [:index, :create, :show, :update] do
      resources :posts, only: [:index]
    end

    resources :users, only: [:create, :show] do
      resources :memberships, only: [:index]
    end
    resources :posts, only: [:create, :show, :update, :destroy]
    resources :memberships, only: [:create, :destroy]
    resource :session, only: [:new, :create, :destroy]
    resources :searches, only: [:create, :show]
    resources :comments, only: [:create, :destroy, :update]
  end

  root 'static_pages#root'

end
