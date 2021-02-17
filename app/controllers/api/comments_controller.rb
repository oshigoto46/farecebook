class Api::CommentsController < ApplicationController


  def create
    @comment = Comment.new(comment_params)
    @comment.author = current_user
    @current_user = current_user
    if @comment.save
      if (@comment.post.author_id != @comment.author_id) && !@comment.parent_comment_id
        @comment.notifiables << Notification.new(notifee_id: @comment.post.author_id)
      elsif @comment.parent_comment_id &&  (@comment.parent_comment.author_id != @comment.author_id)
        @comment.notifiables << Notification.new(notifee_id: @comment.parent_comment.author_id)
      end
      render :show
    else
      render json: @comment.errors.full_messages, status: 422
    end
  end

  def update
    @comment = Comment.find(params[:id])
    @current_user = current_user
    @comment.update(comment_params)
    @comment.save
    render :show
  end

  def destroy
    @comment = Comment.find(params[:id])
    @current_user = current_user
    @comment.destroy
    render :show
  end

  private

  def comment_params
    params.require(:comment).permit(:body, :post_id, :parent_comment_id)
  end

end
