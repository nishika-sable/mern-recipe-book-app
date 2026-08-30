#install base image 
FROM node:20-alpine 

#working directory 
WORKDIR /app

#copy 
COPY package*.json  ./

#install dependencies 
RUN npm ci

#copy 
COPY . .

 
#run 
CMD ["npm", "start"] 
