#get the base image 
From node:20-alpine AS builder

#working directory
WORKDIR /app

#copy 
COPY package*.json ./

#run 
RUN npm ci 

#copy 
COPY . .

#frontend build 
RUN npm run build 

#stage 2 
FROM nginx:alpine 

#copy  
COPY  --from=builder /app/build /usr/share/nginx/html 

#run the app 
CMD ["nginx","-g", "daemon off;"]
