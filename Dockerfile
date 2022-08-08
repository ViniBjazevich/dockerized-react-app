# what image we are using
FROM node:current-alpine

# the name of our work directory
WORKDIR /app

# copies package.json to the root directory
COPY package*.json .

# runs npm install
RUN npm install

# copy [what files] [where they get copied to]
COPY . .

# exposes port 3000
EXPOSE 3000

# comand to run each cammand needs to be separate element of array
CMD ["npm", "start"]