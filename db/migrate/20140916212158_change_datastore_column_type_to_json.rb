class ChangeDatastoreColumnTypeToJson < ActiveRecord::Migration
  def self.up
    remove_column :step_collections, :datastore
    add_column :step_collections, :datastore, :json
  end

  def self.down
    remove_column :step_collections, :datastore
    add_column :step_collections, :datastore, :hstore
  end
end
