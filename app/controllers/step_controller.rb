require 'active_record/errors'

class StepController < ApplicationController
  def show
	@step_id = params[:step_id]
	current_step_collection = StepCollection.first
	step_data = current_step_collection.step_data(@step_id)
	if step_data.nil?
		raise ActiveRecord::RecordNotFound
	end

	respond_to do |format|
		format.html
		format.json {
			render :json => step_data
		}
	end
  end
end
