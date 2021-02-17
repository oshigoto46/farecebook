# == Schema Information
#
# Table name: likes
#
#  id           :integer          not null, primary key
#  liker_id     :integer          not null
#  likable_type :string
#  likable_id   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

require 'test_helper'

class LikeTest < ActiveSupport::TestCase

  def setup
    @like = Like.new(liker_id: "1")
  end

  test "like save" do
    @user = User.new(email: "hoge@gmail.com", first_name:"hopge", last_name:"fufga",gender: "male",password_digest: "hogehogehoge",password:"aaaaaaaaa" ,birth_date:"2020-01-02")
    
    #@user.liker = @like
    #rtn =  @like.save
    @user.save
    #p @like.errors
    #assert @like.valid?
  end

  test "comment likes" do
     @user = User.new(email: "hoge@gmail.com", first_name:"hopge", last_name:"fufga",gender: "male",password_digest: "hogehogehoge",password:"aaaaaaaaa" ,birth_date:"2020-01-02")
     @user.save
     @user.update(email:"fugafuga@gmail.com")
     #@user.destroy
     p User.all
     new_like =  Like.new(liker_id: @user.id)
     @comment =  Comment.new(body: "hogehogehoge", post_id: 1 , author_id: 1) 
    
    #  @comment.likes << new_like
    #  @comment.author_id = @user.id
    #  p @comment
    #  assert @comment.save
  end
  # test "the truth" do
  #   assert true
  # end
end
