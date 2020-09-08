class Api::SearchesController < ApplicationController
  skip_before_action :verify_authenticity_token
  def create
    @search = Search.create(search_params)
    render :show
  end

  def show
    @search = Search.find(params[:id])
  end

  private

  def search_params
    params.require(:search).permit(:keyword)
  end
end
