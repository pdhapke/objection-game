FROM node:latest AS builder
#create directory
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

#Copy files
COPY . /usr/src/app

#Create the bundle
RUN npm run initialize

#Server Image
FROM nginx:alpine

# copy artifact build from the 'build environment'
COPY --from=builder /usr/src/app/dist /usr/share/nginx/html

# expose port 80
EXPOSE 4200:80

# run nginx
CMD ["nginx", "-g", "daemon off;"]

#docker build -t -rm name:tag .
#docker run -d -p port:80 name:tag
