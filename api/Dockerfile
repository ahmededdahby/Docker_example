FROM node:20-alpine

# install nodeman that detect changes and refresh based on them
RUN npm install -g nodemon

# RUN npm install -g express

WORKDIR /app


COPY package.json .


RUN npm install


COPY . .

EXPOSE 4000
# required for docker desktop port mapping


# run the dev in json file
CMD ["npm", "run", "dev"]