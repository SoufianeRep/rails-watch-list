class ReviewsController < ApplicationController
  before_action :set_list, only: [:create]

  def create
    @review = Review.new(review_params)
    @review.list = @list
    if @review.save
      redirect_to list_path(@list)
    else
      render :new, status: :see_other
    end
  end

  private

  def review_params
    params.require(:review).permit(:content, :rating)

  end

  def set_list
    @list = List.find(params[:list_id])

  end
end
