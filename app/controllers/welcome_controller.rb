class WelcomeController < ApplicationController
  def index
    @current_step_collection = StepCollection.first
  end

  def steps
    @current_step_collection = StepCollection.first
    respond_to do |format|
      format.json {
        render :json => @current_step_collection.datastore
      }
    end
  end

  def opensource
  end
end
