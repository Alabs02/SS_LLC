# pull official base image
FROM node:13.12.0-alpine

# set working directory
WORKDIR /app

# add `/app/node_modules/.bin` to $PATH
ENV PATH /app/node_modules/.bin:$PATH
ENV REACT_APP_NAME SSAF_LLC
ENV REACT_APP_SECRET_KEY O104OxC3Ncum358ZQIcZqLO376DPVLMWH28DEECX84C55
ENV REACT_APP_BASE_DEV_URL https://developer.ssafllc.com/
ENV REACT_APP_BASE_PROD_URL https://developer.ssafllc.com/

# install app dependencies
COPY package.json ./
# # COPY package-lock.json ./
# COPY yarn.lock ./
RUN npm install --silent
RUN npm install -g serve
# RUN npm install react-scripts@3.4.1 -g --silent
RUN npm run build

# add app
COPY . ./

# start app
CMD serve -s build