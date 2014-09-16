#!/bin/bash

#
# Prints the given command, then executes it
#  Example: print_and_do_command echo 'hi'
#
function print_and_do_command {
	echo " -> $ $@"
	$@
}

#
# Print the given command, execute it
#	and exit if error happened
function print_and_do_command_exit_on_error {
	print_and_do_command $@
	if [ $? -ne 0 ]; then
		echo " [!] Failed!"
		exit 1
	fi
}

print_and_do_command_exit_on_error bundle install
print_and_do_command_exit_on_error rake db:create
print_and_do_command_exit_on_error rake db:migrate
print_and_do_command_exit_on_error rake db:test:prepare
print_and_do_command_exit_on_error rspec

print_and_do_command_exit_on_error rake db:seed

echo
echo " --> SETUP OK"
echo
