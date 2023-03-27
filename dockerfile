# Use the official fleek/next-js image as the base
FROM fleek/next-js

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available) into the working directory
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the remaining files from the local directory to the working directory
COPY . .

# Expose the port the app runs on
EXPOSE 3000

# Run the development server
CMD ["npm", "run", "dev"]
