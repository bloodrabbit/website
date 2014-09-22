class StepCollection < ActiveRecord::Base
  # setup hstore
  store_accessor :datastore, :version, :steps

  def self.find_by_version(version_str)
    StepCollection.where("datastore @> 'version=>#{version_str}'")
  end

  def versions_of_step(stepid)
    the_step = self.steps[stepid]
    puts " (debug) the_step: #{the_step}"
    return the_step['versions']
  end

  def latest_version_of_step(stepid)
    the_step = self.steps[stepid]
    return the_step['latest']
  end
end
