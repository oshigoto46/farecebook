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
    @user = User.new(first_name:"hopge", last_name:"fufga",gender: "male",password_digest: "hogehogehoge",password:"aaaa" )
    rtn1 = @user.save
    p rtn1
    rtn =  @like.save
    p rtn
    #assert @like.valid?
  end
  # test "the truth" do
  #   assert true
  # end
end
