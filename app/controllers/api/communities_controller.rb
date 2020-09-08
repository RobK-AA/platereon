class Api::CommunitiesController < ApplicationController

  # before_action :require_logged_in, only: [:show]

  def index
    @communities = Community.search(params[:search])
  end

  def create
    
    @community = Community.new(community_params)
    if @community.save
      render "api/communities/show"
    else
      
      if !(params[:community][:name].length < 1)
        render json: ['There is already a community with this name. Please choose another name.'], status: 401
      else
        render json: ['Name can\'t be blank.'], status: 401
      # render @community.errors.full_messages, status: 401
      # render json: { communityErrors: "There is already a community with this name. Please choose another name." }
      end
    end
  end

  def show
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
