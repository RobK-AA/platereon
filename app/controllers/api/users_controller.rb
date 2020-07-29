class Api::UsersController < ApplicationController

  # skip_before_action :verify_authenticity_token
  # before_action :require_logged_in, only: [:show]

  def create

    debugger

    @user = User.new(user_params)

    debugger

    if @user.save

      debugger

      login!(@user)
      render "api/users/show"
    else

      debugger

      flash.now[:errors] = @user.errors.full_messages
      render :new
    end
  end

  def new
    @user = User.new
    render :new
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
