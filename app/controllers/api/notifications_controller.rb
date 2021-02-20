class Api::NotificationsController < ApplicationController
  def index
    logger.debug("==========friends-request========")
    logger.debug(Notification.all)
    @notifications = Notification.where(notifee_id: current_user.id)
  end

  def update
    @notification = Notification.find(params[:id])
    @notification.status = 'READ'
    @notification.save
    render :show
  end
end
