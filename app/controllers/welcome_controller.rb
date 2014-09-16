class WelcomeController < ApplicationController
  def index
    @current_step_collection = StepCollection.first
  end
end
