class Api::CommunitiesController < ApplicationController

  # before_action :require_logged_in, only: [:show]

  def create
    @community = Community.new(community_params)
    if @community.save
      render "api/communities/show"
    else
      render json: @community.errors.full_messages, status: 422
    end
  end

  def show
    @community = Community.find(params[:id])
    render :show
  end

  def update
    @community = Community.find(params[:id])
    @community.update(
      name: community_params[:community][:name],
      description: community_params[:community][:description],
      bronze_perks: community_params[:community[:bronze_perks],
      silver_perks: community_params[:community][:silver_perks],
      gold_perks: community_params[:community][:gold_perks],
      short_description: community_params[:community][:short_description],
      plural: community_params[:community][:plural]
    )

    if @community.update
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
