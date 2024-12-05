ssh -i "DicodingPair.pem" ubuntu@ec2-18-141-143-223.ap-southeast-1.compute.amazonaws.com (yes)
$path = ".\DicodingPair.pem"

# Reset to remove explicit permissions

icacls.exe $path /reset

# Give current user explicit read-permission

icacls.exe $path /GRANT:R "$($env:USERNAME):(R)"

# Disable inheritance and remove inherited permissions

icacls.exe $path /inheritance:r

exit(untuk slogout)

curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash (install node untuk ec2)

git clone https://github.com/joko345/dicodingEC2.git (inisiasi git ulang pada ubuntu aws ec2)
ls
cd dicodingEC2
