class API::PostsController < ApplicationController
  
  def create
  end

  def show
  end

  def update
  end

  def destroy
    @post = current_user.posts.find_by(id: params[:id])
    if @post
      @post.destroy
      render :show
    else
      render json: { postDeleteError: "Something went wrong. Post not deleted." }, status 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:community_id, :author_id, :body)
  end

end
