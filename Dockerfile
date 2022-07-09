FROM node:16.14.0
# Not using the -slim or -alpine node image because this one includes git

WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .

WORKDIR /app/hexo-site
COPY ./hexo-site/package*.json ./
RUN npm ci
COPY ./hexo-site ./

WORKDIR /app/hexo-site/themes/bmitchinson_tranquilpeak
COPY ./hexo-site/themes/bmitchinson_tranquilpeak/package*.json ./
RUN npm ci
COPY ./hexo-site/themes/bmitchinson_tranquilpeak ./
RUN npm run build

WORKDIR /app

ARG HELLO_MSG
ENV HELLO_MSG $HELLO_MSG

# ignored by heroku, just used for local development
EXPOSE 3000

CMD ["npm", "start"]