class Api::UsersController < ApplicationController

  # skip_before_action :verify_authenticity_token
  # before_action :require_logged_in, only: [:show]

  def create

    

    @user = User.new(user_params)

    

    if @user.save

      

      login!(@user)
      render "api/users/show"
    else

      

      flash.now[:errors] = @user.errors.full_messages
      render :show
    end
  end

  def show
    @user = User.find_by(params[:id])
    render :show
  end

  private

  def user_params
    params.require(:user).permit(:username, :email, :password)
  end
end
