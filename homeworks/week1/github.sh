#!/bin/bash

echo "https://api.github.com/users/$1"
result=$(curl -X GET --header "Accept: */*" "https://api.github.com/users/$1")
echo "Response from server"
# 先提取需要的部分，接著以 " 分割以後取第四段。
echo "${result}" | grep -w 'name' | awk -F'"' '{print $4}'
echo "${result}" | grep -w 'bio' | awk -F'"' '{print $4}'
echo "${result}" | grep -w 'location' | awk -F'"' '{print $4}'
echo "${result}" | grep -w 'blog' | awk -F'"' '{print $4}'

