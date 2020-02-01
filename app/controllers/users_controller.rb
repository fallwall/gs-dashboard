class UsersController < ApplicationController
  before_action :set_user, only: %i[show]

  def index
    @users = User.all
    render json: @users, except: %i[created_at updated_at password]
  end

  def show
    render json: @user, except: %i[password created_at updated_at], status: :ok
  end

  def create
    @user = User.new(user_params)
    if @user.save
      render json: @user, status: :created, location: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end
  end

  def verify
    @user = {
      id: @current_user[:id],
      username: @current_user[:username]
    }
    render json: @user
  end

  private

  def set_user
    @user = User.find(params[:id])
  end

  def user_params
    params.require(:user).permit(:username, :name, :email, :dob, :password, :zipcode)
  end
end