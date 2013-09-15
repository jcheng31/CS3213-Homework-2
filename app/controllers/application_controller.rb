class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :logged_in?, :access_token
  before_filter :pass_token

  def pass_token
    gon.token = access_token if logged_in?
    gon.user_email = user_email if logged_in?
    gon.id = user_id if logged_in?
  end

  def logged_in?
  	access_token.present?
  end

  def access_token
  	session[:access_token]
  end

  def user_id
    session[:user_id]
  end

  def user_email
    session[:user_email]
  end
end
