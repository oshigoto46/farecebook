# == Schema Information
#
# Table name: users
#
#  id                           :integer          not null, primary key
#  email                        :string           not null
#  first_name                   :string           not null
#  last_name                    :string           not null
#  password_digest              :string           not null
#  session_token                :string           not null
#  birth_date                   :date             not null
#  created_at                   :datetime         not null
#  updated_at                   :datetime         not null
#  profile_picture_file_name    :string
#  profile_picture_content_type :string
#  profile_picture_file_size    :integer
#  profile_picture_updated_at   :datetime
#  cover_photo_file_name        :string
#  cover_photo_content_type     :string
#  cover_photo_file_size        :integer
#  cover_photo_updated_at       :datetime
#  hometown                     :string
#  current_city                 :string
#  school                       :string
#  workplace                    :string
#  gender                       :string
#

class User < ApplicationRecord
  validates :email, presence:true, uniqueness:true
  validates :password_digest, :session_token, presence:true
  validates :password, length: { minimum: 6, allow_nil: true }
  has_attached_file :profile_picture, default_url: "https://s3.us-east-2.amazonaws.com/farcebook-dev/default.jpeg"
  has_attached_file :cover_photo, default_url: 'https://s3.us-east-2.amazonaws.com/farcebook-dev/default.jpg'
  validates_attachment_content_type :profile_picture, content_type: /\Aimage\/.*\Z/
  validates_attachment_content_type :cover_photo, content_type: /\Aimage\/.*\Z/
  after_initialize :ensure_session_token

  attr_reader :password

  has_many :friendships,
    foreign_key: :receiver_id

  has_many :sent_friendships,
    foreign_key: :requester_id

  def self.find_by_credentials(email, password)
    user = User.find_by_email(email)
    user && user.is_password?(password) ? user : nil
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def self.generate_session_token
    SecureRandom.urlsafe_base64
  end

  def reset_session_token!
    self.session_token = User.generate_session_token
    self.save!
    self.session_token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token
  end

end
