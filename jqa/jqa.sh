#!/usr/bin/bash
### HOW TO USE THIS PROGRAM
# This is very similar to the JQ program from Linux
# an alternative program to read JSON files in MINGW64 (Git Bash)
# you must have Node JS installed in your OS.
# 
# ex: jqa -r '.object | .[] | .title' path_to_your_file.json
# return: an array of objects having the property 'title' only

jqapath="$( echo ${BASH_SOURCE[0]} | sed 's|/jqa.sh||')"

function jqa(){
	echo "$(node $jqapath/jqa.js """$2""" """$3""")"
}