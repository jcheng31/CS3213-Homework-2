class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :logged_in?, :access_token

  def logged_in?
  	access_token.present?
  end

  def access_token
  	session[:access_token]
  end
end
