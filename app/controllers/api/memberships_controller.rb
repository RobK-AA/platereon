class Api::MembershipsController < ApplicationController

  def index
    @memberships = Membership.all
  end

  def create
    @membership = Membership.new(membership_params)
    @membership.member_id = current_user.id
    @membership.community_id = membership_params[:community_id]
    if @membership.save
      render "api/memberships/show"
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @membership = current_user.communities_joined.find_by(id: params[:id])
    if @membership
      @membership.destroy
    else
      render json: { endMembershipError: "You are not a member of this community"}
  end

  private

  def membership_params
    params.require(:membership).permit(:community_id)
  end
end
