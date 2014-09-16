require 'json'

desc "Uploads datastore from a provided JSON file"
task :upload_datastore, [:filepth] => [:environment] do |t, args|
  puts "-> Reading JSON file"
  file = File.read(args.filepth)
  puts "-> Parsing JSON"
  data_hash = JSON.parse(file).to_json
  puts " data_hash: #{data_hash}"
  puts "-> Uploading"
  sc = StepCollection.first
  sc.datastore = data_hash
  sc.save!
  puts "-> [DONE]"
end
