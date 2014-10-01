require 'json'

desc "Uploads datastore from a provided JSON file"
task :upload_datastore, [:filepth] => [:environment] do |t, args|
  puts "-> Reading JSON file"
  file = File.read(args.filepth)
  puts "-> Parsing JSON"
  data_json_string = JSON.parse(file).to_json
  puts " data_json_string: #{data_json_string}"
  puts "-> Uploading"
  sc = StepCollection.first_or_create
  sc.datastore = data_json_string
  sc.save!
  puts "-> [DONE]"
end
