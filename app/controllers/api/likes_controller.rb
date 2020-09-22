class Api::LikesController < ApplicationController

  def create
    @like = Like.new(like_params)
    
    if @like.save
      render :show
    else
      render :errors, status: 404
    end
  end

  def destroy
    @like = Like.where(id: params[:id]).find_by(liker_id: current_user.id)

    if @like
      @like.destroy
      render :show
    else
      render json: ["Couldn't remove like."], status: 404
    end
  end

  private

  def like_params
    params.require(:like).permit(:liker_id, :likeable_id, :likeable_type)
  end

end
