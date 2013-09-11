class SessionsController < ApplicationController
	def client
		client_id = "6e031aa4ed74f5b3f3141de7d99c5444"
  	client_secret = "7dc8df716c2915fdeaec773cd390f599"
  	client = OAuth2::Client.new(client_id, client_secret, :site => 'https://cs3213.herokuapp.com', :authorize_url => '/oauth/new')
	end

  def new
  	redirect_to client.auth_code.authorize_url(:authorize_url => '/oauth/new', :redirect_uri => 'http://localhost:3000/redirect')
  end

  def redirect
    access_token = client.auth_code.get_token(params[:code], :redirect_uri => 'http://localhost:3000')
    session[:access_token] = access_token.token
    puts session[:access_token]
    redirect_to '/'
  end

  def destroy
  end
end
