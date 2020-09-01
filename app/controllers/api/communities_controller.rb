class Api::CommunitiesController < ApplicationController

  # before_action :require_logged_in, only: [:show]

  def index
    @communities = Community.all
  end

  def create
    @community = Community.new(community_params)
    if @community.save
      render "api/communities/show"
    else
      render json: @community.errors.full_messages, status: 422
    end
  end

  def show
    debugger
    @community = Community.find(params[:id])
    render "api/communities/show"
  end

  def update
    @community = Community.find(params[:id])
    
    if @community.update(community_params)
      render "api/communities/show"
    else
      render json: @community.errors.full_messages, status: 422
    end
  end
  
  private

  def community_params
    params.require(:community).permit(
      :name, 
      :description, 
      :creator_id,
      :bronze_perks,
      :silver_perks,
      :gold_perks,
      :short_description,
      :plural) 
  end
end
