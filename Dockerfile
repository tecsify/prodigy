# Use Node.js version 14 as base image
FROM node:20.11.1

# Set the working directory in the container
WORKDIR /app

# Copy the application code to the container
COPY package.json yarn.lock ./

# Install all dependencies
RUN yarn install

# Build the application
RUN yarn build
RUN yarn generate

# Expose port 7744
EXPOSE 7744

# Command to run the application
CMD ["yarn", "start"]
    