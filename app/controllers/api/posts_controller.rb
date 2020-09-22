class Api::PostsController < ApplicationController

  def index
    community_id = params[:community_id]
    @posts = Post.includes(:author, :community, :comments, :likes).select("*").where("posts.community_id = ?", community_id).order("created_at DESC").with_attached_images
    
    render :index
  end

  def create
    @post = Post.new(post_params)
    
    if @post.save && @post.author_id == @post.community.creator_id
      
      render :show
    else
      render :errors, status: 404
    end
  end

  def show
    @post = Post.includes(:author, :community, :comments, :likes).find_by(id: params[:id])
                .with_attached_images
    render :show
  end

  def update
    @post = Post.includes(:author, :community, :comments, :likes).find_by(id: params[:id]).with_attached_images

    if @post.update(post_params)
      render :show
    else
      render :errors, status: 404
    end
  end

  def destroy
    @post = current_user.posts.find_by(id: params[:id])
    if @post
      @post.destroy
      render :show
    else
      render json: { postDeleteError: "Something went wrong. Post not deleted." }, status: 404
    end
  end

  private

  def post_params
    params.require(:post).permit(:community_id, :author_id, :body, :title, :video_url, :link_url, images: [])
  end

end
