#!/bin/bash
# Simple script to run a local PHP development server

# Navigate to the website directory
#cd "$(dirname "$0")"

# Define the port to use
PORT=9999

echo "Starting PHP development server on http://localhost:$PORT"
echo "Press Ctrl+C to stop the server"

# Start the PHP development server
php -S localhost:$PORT
