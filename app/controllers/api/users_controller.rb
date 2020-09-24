class Api::UsersController < ApplicationController

  # before_action :require_logged_in, only: [:show]

  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  def show
    @user = User.find(params[:id])
    @posts = @user.posts_in_communities_joined
    
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password) 
  end
end
