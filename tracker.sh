export http_proxy="http://127.0.0.1:7890"
export https_proxy=$http_proxy
a=`curl -s https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all.txt`
b=`curl -s https://raw.githubusercontent.com/ngosang/trackerslist/master/trackers_all_ip.txt`
c=`curl -s https://raw.githubusercontent.com/XIU2/TrackersListCollection/master/all.txt`
result="$a $b $c"
echo $result