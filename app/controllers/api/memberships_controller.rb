class Api::MembershipsController < ApplicationController

  def index
    
    if current_user.memberships.length > 0
      @memberships = Membership.all
      render :index
    else
      render json: { noMembershipsMessage: "You haven't joined any communities yet." }
    end
  end

  def create
    @membership = Membership.new(membership_params)
    
    if @membership.save
      render :show
    else
      render json: @membership.errors.full_messages, status: 422
    end
  end
  
  def destroy
    @membership = Membership.find_by(id: params[:id])
    debugger
    if @membership
      @membership.destroy
      debugger
    else
      render json: { endMembershipError: "You are not a member of this community"}
    end
  end

  private

  def membership_params
    params.require(:membership).permit(:community_id, :member_id)
  end
end
