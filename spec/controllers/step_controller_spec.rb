require 'rails_helper'
require File.expand_path("#{Rails.root}/lib/datastore/datastore_loader.rb")

RSpec.describe StepController, :type => :controller do

	describe "GET show" do
		before(:each) do
			DatastoreLoader.upload_datastore_from_file("#{Rails.root}/db/test_datastore.json")
		end
		
		it "returns http success" do
			get :show, step_id: 'activate-ssh-key'
			expect(response).to be_success
		end
	end

end
