class Api::CommunitiesController < ApplicationController

  # before_action :require_logged_in, only: [:show]

  def index
    @communities = Community.search(params[:search])
                            .with_attached_background_image
                          
    # @users = @communities.map { |community| community.creator.with_attached_profile_photo }
  end

  def create
    
    @community = Community.new(community_params)
    # @user = @community.creator.with_attached_profile_photo 
    if @community.save
      render "api/communities/show"
    else
      
      if !(params[:community][:name].length < 1)
        render json: ['There is already a community with this name. Please choose another name.'], status: 401
      else
        render json: ['Name can\'t be blank.'], status: 401
      end
    end
  end

  def show
    @community = Community.with_attached_background_image.find(params[:id])
    # @user = @community.creator.with_attached_profile_photo 
    render "api/communities/show"
  end

  def update
    @community = Community.find(params[:id])
    # @user = @community.creator.with_attached_profile_photo 
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
      :plural,
      :background_image) 
  end
end
