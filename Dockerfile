FROM alpine:3.15.0
RUN apk add --update nodejs npm
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

ARG HELLO_MSG
ENV HELLO_MSG $HELLO_MSG

CMD ["npm", "start"]