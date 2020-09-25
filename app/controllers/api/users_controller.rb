class Api::UsersController < ApplicationController

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
    @user = User.with_attached_profile_photo.find(params[:id])
    
    @posts = @user.posts_in_communities_joined
    
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:name, :email, :password, :profile_photo) 
  end
end
