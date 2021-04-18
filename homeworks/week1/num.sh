#!/bin/bash

echo $@
for(( i=1;i <= $1;i=i+1 ))
do
	echo ${i}
	touch "${i}.js"
done
