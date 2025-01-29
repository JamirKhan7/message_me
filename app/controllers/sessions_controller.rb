class SessionsController < ApplicationController
  before_action :already_logged_in, only: [ :new, :create ]
  def new
  end

  def create
    user = User.find_by(username: params[:session][:username])
    if user.present? && user.authenticate(params[:session][:password])
      session[:user_id] = user.id
      flash[:success] = "Hello #{user.username}, Welcome to MessageMe."
      redirect_to root_path
    else
      flash.now[:danger] = "You have entered incorrect login details"
      render "new"
    end
  end

  def destroy
    session[:user_id] = nil
    flash[:success] = "You have logged out successfully."
    redirect_to login_path
  end

  private

  def already_logged_in
    if logged_in?
      flash[:danger] = "You are already logged in."
      redirect_to root_path
    end
  end
end
