# build docker image
sudo docker build -t app:latest -f ./Dockerfile .
# run docker container
sudo docker run -dit -p 8080:3000 \
- v $(pwd):/server --name my_server app
