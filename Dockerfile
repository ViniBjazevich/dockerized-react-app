# what image we are using
FROM node:17-alpine

# the name of our working directory
WORKDIR /app

# copy [what files] [where they get copied to]
# star is a wild card so package-anything.json will be copied over
# this is to get the package-lock.json and package.json
COPY package*.json .

# runs npm install
RUN npm install

# copy everything into our working directory
COPY . .

# exposes port 3000
EXPOSE 3000

# comand to run each cammand needs to be separate element of array
CMD ["npm", "start"]