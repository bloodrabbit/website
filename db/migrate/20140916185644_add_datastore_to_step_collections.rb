class AddDatastoreToStepCollections < ActiveRecord::Migration
  def change
    add_column :step_collections, :datastore, :hstore
  end
end
