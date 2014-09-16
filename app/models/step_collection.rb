class StepCollection < ActiveRecord::Base
  # setup hstore
  store_accessor :datastore, :version

  def self.find_by_version(version_str)
    StepCollection.where("datastore @> 'version=>#{version_str}'")
  end
end
