class SessionsController < ApplicationController
  require 'net/http'
  require 'json'

  def redirect_url
    return 'http://localhost:3000/redirect' if Rails.env == "development" 
    'http://old-xui-movies.herokuapp.com/redirect'
  end

	def client
		client_id = "6e031aa4ed74f5b3f3141de7d99c5444"
  	client_secret = "7dc8df716c2915fdeaec773cd390f599"
  	client = OAuth2::Client.new(client_id, client_secret, :site => 'https://cs3213.herokuapp.com', :authorize_url => '/oauth/new')
	end

  def new
  	redirect_to client.auth_code.authorize_url(:authorize_url => '/oauth/new', :redirect_uri => redirect_url)
  end

  def redirect
    access_token = client.auth_code.get_token(params[:code], :redirect_uri => redirect_url)
    user_url = "http://cs3213.herokuapp.com/users/current.json?access_token=#{access_token.token}"
    user_info = JSON.parse(Net::HTTP.get(URI.parse(user_url)))

    session[:access_token] = access_token.token
    session[:user_id] = user_info["id"]
    session[:user_email] = user_info["email"]
    puts "Access Token: " + session[:access_token]
    redirect_to '/'
  end

  def destroy
    session[:access_token] = nil
    session[:user_id] = nil
    session[:user_email] = nil
    redirect_to '/'
  end
end
