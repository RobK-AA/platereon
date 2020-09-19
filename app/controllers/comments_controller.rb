class Api::CommentsController < ApplicationController

  def create
    @comment = Comment.includes(:commenter).new(comment_params)
    @comment.commenter_id = current_user.commenter_id
    if @comment.save
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  def destroy
  end

  def update
    @comment = Comment.includes(:commenter, :comments).find(params[:id])

    if @comment.update(comment_params)
      render :show
    else
      render json: @comment.errors.full_messages, status: 404
    end
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :commentable_id, :commentable_type)
  end

end
