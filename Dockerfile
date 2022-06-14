# Our Node base image
FROM node:16.13.1 as build

# Change our current working directory
WORKDIR /app

# Copy over `package.json` and lock files to optimize the build process
COPY ["package.json", "package-lock.json*", "npm-shrinkwrap.json*", "./"]
# Install Node modules
RUN npm install

# Copy over rest of the project files
COPY . .

RUN npm run build

###
# Only copy over the Node pieces we need
###
FROM node:16.13.1

WORKDIR /app
COPY --from=build /app/build ./build
COPY --from=build /app/node_modules ./node_modules
COPY package.json .

CMD ["node", "./build/index.js"]

