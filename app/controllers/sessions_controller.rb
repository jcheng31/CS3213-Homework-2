class SessionsController < ApplicationController
  def redirect_url
    return 'http://localhost:3000/redirect' if Rails.env == "development" 
    'http://xui-movies.herokuapp.com/redirect'
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
    session[:access_token] = access_token.token
    puts "Access Token: " + session[:access_token]
    redirect_to '/'
  end

  def destroy
    session[:access_token] = nil
    redirect_to '/'
  end
end
