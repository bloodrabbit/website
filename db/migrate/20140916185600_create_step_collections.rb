class CreateStepCollections < ActiveRecord::Migration
  def change
    create_table :step_collections do |t|

      t.timestamps
    end
  end
end
