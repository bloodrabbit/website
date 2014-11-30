require 'json'
require "#{Rails.root}/lib/datastore/datastore_loader.rb"

desc "Uploads datastore from a provided JSON file"
task :upload_datastore, [:filepth] => [:environment] do |t, args|
  DatastoreLoader.upload_datastore_from_file(args.filepth)
end
