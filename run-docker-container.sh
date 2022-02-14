# used to build + run docker container locally for debugging purposes
docker build . -t notion-publish-tool --no-cache \
    --build-arg HELLO_MSG="$HELLO_MSG"
docker run -p 3000:3000 notion-publish-tool