FROM node:20
WORKDIR /front
COPY . .
RUN npm i 
RUN npm run build
RUN npm i -g serve
EXPOSE 3000
CMD ["serve", "-s", "dist", "-l", "3000"]